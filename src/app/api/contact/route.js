import { NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';
import { adminEmailTemplate, userEmailTemplate } from '@/lib/email-templates';

// Rate limiting sederhana
const submissions = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 menit

function checkRateLimit(ip) {
    const now = Date.now();
    const lastSubmission = submissions.get(ip) || 0;
    
    if (now - lastSubmission < RATE_LIMIT_WINDOW) {
        return false;
    }
    
    submissions.set(ip, now);
    return true;
}

export async function POST(request) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        
        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { success: false, message: 'Terlalu banyak permintaan. Silakan coba lagi nanti.' },
                { status: 429 }
            );
        }

        // Parse form data
        const body = await request.json();
        const { fullname, brandname, email, messages, category } = body;

        // Validation
        if (!fullname || !brandname || !email || !category) {
            return NextResponse.json(
                { success: false, message: 'Semua field wajib harus diisi.' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Format email tidak valid.' },
                { status: 400 }
            );
        }

        const emailData = {
            fullname: fullname.trim(),
            brandname: brandname.trim(),
            email: email.trim().toLowerCase(),
            messages: messages?.trim() || '',
            category: category.trim(),
        };

        // Send email to admin
        const adminTemplate = adminEmailTemplate(emailData);
        await transporter.sendMail({
            from: `"Gema Fest 2026" <${process.env.SMTP_FROM}>`,
            to: process.env.ADMIN_EMAIL,
            subject: adminTemplate.subject,
            text: adminTemplate.text,
            html: adminTemplate.html,
        });

        // Send confirmation email to user
        const userTemplate = userEmailTemplate(emailData);
        await transporter.sendMail({
            from: `"Gema Fest 2026" <${process.env.SMTP_FROM}>`,
            to: emailData.email,
            subject: userTemplate.subject,
            text: userTemplate.text,
            html: userTemplate.html,
        });

        return NextResponse.json({
            success: true,
            message: 'Pendaftaran berhasil! Silakan cek email Anda untuk konfirmasi.',
        });

    } catch (error) {
        console.error('Error sending email:', error);
        
        return NextResponse.json(
            { 
                success: false, 
                message: 'Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.' 
            },
            { status: 500 }
        );
    }
}
import nodemailer from 'nodemailer';

// Create reusable transporter using Domainesia Mailspace SMTP
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    // Tambahkan ini untuk handle certificate mismatch Domainesia
    tls: {
        rejectUnauthorized: false,
        servername: 'mx6.mailspace.id'
    }
});

// Verify connection configuration
export const verifyConnection = async () => {
    try {
        await transporter.verify();
        console.log('SMTP connection verified successfully');
        return true;
    } catch (error) {
        console.error('SMTP connection failed:', error);
        return false;
    }
};
const getCategoryLabel = (category) => {
    const categories = {
        tenant: 'Tenant / UMKM',
        sponsor: 'Sponsor',
        media: 'Media Partner',
    };
    return categories[category] || category;
};

// Email template untuk Admin
export const adminEmailTemplate = (data) => {
    const categoryLabel = getCategoryLabel(data.category);
    
    return {
        subject: `🎉 Pendaftaran Baru Gema Fest 2026 - ${categoryLabel}`,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #e94560 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🎪 Gema Fest 2026</h1>
            <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 16px;">Pendaftaran Baru Masuk!</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 25px; border-radius: 4px;">
                <strong style="color: #856404;">📋 Kategori: ${categoryLabel}</strong>
            </div>
            
            <h2 style="color: #1a1a2e; font-size: 20px; margin-bottom: 25px; border-bottom: 2px solid #e94560; padding-bottom: 10px;">
                Detail Pendaftar
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 140px;">
                        <strong>👤 Nama/PIC</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                        ${data.fullname}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">
                        <strong>🏢 Brand/Bisnis</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                        ${data.brandname}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">
                        <strong>📧 Email</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                        <a href="mailto:${data.email}" style="color: #e94560; text-decoration: none;">${data.email}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; color: #666; vertical-align: top;">
                        <strong>💬 Pesan</strong>
                    </td>
                    <td style="padding: 12px 0; color: #333;">
                        ${data.messages || '<em style="color: #999;">Tidak ada pesan</em>'}
                    </td>
                </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                    Segera hubungi pendaftar dalam waktu <strong>1x24 jam</strong>
                </p>
                <a href="mailto:${data.email}" style="display: inline-block; margin-top: 15px; padding: 12px 30px; background-color: #e94560; color: #ffffff; text-decoration: none; border-radius: 25px; font-weight: bold;">
                    Balas Email
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1a1a2e; padding: 25px 30px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
                © 2026 Gema Fest - Kawan Event<br>
                Email otomatis dari sistem pendaftaran
            </p>
        </div>
    </div>
</body>
</html>
        `,
        text: `
PENDAFTARAN BARU - GEMA FEST 2026
================================

Kategori: ${categoryLabel}

DETAIL PENDAFTAR:
- Nama/PIC: ${data.fullname}
- Brand/Bisnis: ${data.brandname}
- Email: ${data.email}
- Pesan: ${data.messages || 'Tidak ada pesan'}

Segera hubungi pendaftar dalam waktu 1x24 jam.
        `
    };
};

// Email template untuk User (konfirmasi)
export const userEmailTemplate = (data) => {
    const categoryLabel = getCategoryLabel(data.category);
    
    return {
        subject: `✅ Pendaftaran Gema Fest 2026 Berhasil - ${data.brandname}`,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #e94560 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🎪 Gema Fest 2026</h1>
            <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 16px;">Pendaftaran Berhasil!</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background-color: #d4edda; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 40px;">✅</span>
                </div>
                <h2 style="color: #1a1a2e; margin: 0;">Terima Kasih, ${data.fullname}!</h2>
            </div>
            
            <p style="color: #555; line-height: 1.8; text-align: center; margin-bottom: 30px;">
                Pendaftaran <strong>${data.brandname}</strong> sebagai <strong>${categoryLabel}</strong> 
                di Gema Fest 2026 telah kami terima dengan baik.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                <h3 style="color: #1a1a2e; margin: 0 0 15px 0; font-size: 16px;">📋 Ringkasan Pendaftaran</h3>
                <table style="width: 100%;">
                    <tr>
                        <td style="padding: 8px 0; color: #666;">Nama/PIC:</td>
                        <td style="padding: 8px 0; color: #333; text-align: right;"><strong>${data.fullname}</strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #666;">Brand/Bisnis:</td>
                        <td style="padding: 8px 0; color: #333; text-align: right;"><strong>${data.brandname}</strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #666;">Kategori:</td>
                        <td style="padding: 8px 0; color: #333; text-align: right;"><strong>${categoryLabel}</strong></td>
                    </tr>
                </table>
            </div>
            
            <div style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                    ⏰ <strong>Tim kami akan menghubungi Anda maksimal 1x24 jam</strong><br>
                    melalui email atau WhatsApp untuk informasi lebih lanjut.
                </p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <p style="color: #888; font-size: 14px; margin-bottom: 15px;">Ikuti update terbaru di:</p>
                <a href="https://instagram.com/gemafest" style="display: inline-block; margin: 0 5px; padding: 10px 20px; background-color: #e94560; color: #ffffff; text-decoration: none; border-radius: 20px; font-size: 13px;">
                    📸 Instagram
                </a>
                <a href="https://tiktok.com/@gemafest" style="display: inline-block; margin: 0 5px; padding: 10px 20px; background-color: #1a1a2e; color: #ffffff; text-decoration: none; border-radius: 20px; font-size: 13px;">
                    🎵 TikTok
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1a1a2e; padding: 25px 30px; text-align: center;">
            <p style="color: #ffffff; margin: 0 0 10px 0; font-size: 14px;">
                <strong>Gema Fest 2026</strong>
            </p>
            <p style="color: #888; margin: 0; font-size: 12px;">
                © 2026 Kawan Event | Jangan ragu untuk menghubungi kami<br>
                <a href="mailto:admin@kawanevent.co.id" style="color: #e94560;">admin@kawanevent.co.id</a>
            </p>
        </div>
    </div>
</body>
</html>
        `,
        text: `
PENDAFTARAN BERHASIL - GEMA FEST 2026
=====================================

Terima Kasih, ${data.fullname}!

Pendaftaran ${data.brandname} sebagai ${categoryLabel} di Gema Fest 2026 telah kami terima dengan baik.

RINGKASAN PENDAFTARAN:
- Nama/PIC: ${data.fullname}
- Brand/Bisnis: ${data.brandname}
- Kategori: ${categoryLabel}

Tim kami akan menghubungi Anda maksimal 1x24 jam melalui email atau WhatsApp untuk informasi lebih lanjut.

---
Gema Fest 2026 | Kawan Event
admin@kawanevent.co.id
        `
    };
};
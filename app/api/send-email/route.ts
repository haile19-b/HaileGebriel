import { transporter } from '@/config/nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json()

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `🎯 Portfolio Contact: ${subject}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { 
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                        line-height: 1.6; 
                        color: #333; 
                        max-width: 600px; 
                        margin: 0 auto; 
                        padding: 20px;
                    }
                    .header { 
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; 
                        padding: 30px; 
                        text-align: center; 
                        border-radius: 10px 10px 0 0;
                    }
                    .content { 
                        background: #f8f9fa; 
                        padding: 30px; 
                        border-radius: 0 0 10px 10px;
                        border: 1px solid #e9ecef;
                    }
                    .field { 
                        background: white; 
                        padding: 15px; 
                        margin: 10px 0; 
                        border-radius: 8px; 
                        border-left: 4px solid #667eea;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .label { 
                        font-weight: bold; 
                        color: #667eea; 
                        display: block; 
                        margin-bottom: 5px;
                    }
                    .message-box { 
                        background: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        border: 1px solid #e9ecef;
                        margin-top: 15px;
                    }
                    .footer { 
                        text-align: center; 
                        margin-top: 20px; 
                        padding: 20px; 
                        color: #6c757d; 
                        font-size: 14px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🚀 New Portfolio Message</h1>
                    <p>You have a new contact form submission</p>
                </div>
                
                <div class="content">
                    <div class="field">
                        <span class="label">👤 Name</span>
                        <span>${name}</span>
                    </div>
                    
                    <div class="field">
                        <span class="label">📧 Email</span>
                        <span><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></span>
                    </div>
                    
                    <div class="field">
                        <span class="label">🎯 Subject</span>
                        <span>${subject}</span>
                    </div>
                    
                    <div class="message-box">
                        <span class="label">💬 Message</span>
                        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This email was sent from your portfolio contact form</p>
                    <p>📅 ${new Date().toLocaleString()}</p>
                </div>
            </body>
            </html>
        `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent successfully' })
}
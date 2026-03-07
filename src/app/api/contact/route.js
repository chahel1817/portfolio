import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer
        // NOTE: For Gmail, the user needs to create an "App Password" 
        // at https://myaccount.google.com/apppasswords
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'chahel1817@gmail.com',
            subject: `SIGNAL RECEIVED: ${subject || 'New Contact Form Submission'}`,
            text: `
                Mission Briefing Received:
                ---------------------------
                Code Name: ${name}
                Comm Channel: ${email}
                
                Brief:
                ${message}
                ---------------------------
                Sent from your Dark Port Portfolio
            `,
            html: `
                <div style="font-family: 'Courier New', Courier, monospace; background: #0d0d1a; color: #fff; padding: 30px; border: 1px solid #f5c518;">
                    <h2 style="color: #f5c518; border-bottom: 1px solid #f5c518; padding-bottom: 10px;">SIGNAL RECEIVED</h2>
                    <p><strong>Code Name:</strong> <span style="color: #00f5ff;">${name}</span></p>
                    <p><strong>Comm Channel:</strong> <span style="color: #00f5ff;">${email}</span></p>
                    <p><strong>Mission Type:</strong> ${subject}</p>
                    <hr style="border: 0.5px solid rgba(255,255,255,0.1);" />
                    <p><strong>Brief:</strong></p>
                    <p style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 4px; border-left: 3px solid #f5c518;">${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Signal Terminated Successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Transmission Failed', details: error.message }, { status: 500 });
    }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, service, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            replyTo: email,
            subject: `✨ New Inquiry: ${service} from ${name}`,
            text: `
                New Contact Form Submission
                ---------------------------
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Service: ${service}
                Message: ${message}
            `,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
                        .header { background: linear-gradient(135deg, #D4A574 0%, #E5C29B 100%); padding: 30px; text-align: center; color: white; }
                        .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
                        .content { padding: 40px; background: #ffffff; }
                        .field { margin-bottom: 25px; border-bottom: 1px solid #f8f8f8; padding-bottom: 15px; }
                        .label { font-size: 12px; text-transform: uppercase; color: #D4A574; font-weight: 700; margin-bottom: 5px; display: block; }
                        .value { font-size: 16px; color: #444; font-weight: 500; }
                        .message-box { background: #fdfaf7; padding: 20px; border-radius: 8px; border-left: 4px solid #D4A574; margin-top: 10px; }
                        .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>New Studio Inquiry</h1>
                        </div>
                        <div class="content">
                            <div class="field">
                                <span class="label">Full Name</span>
                                <span class="value">${name}</span>
                            </div>
                            <div class="field">
                                <span class="label">Email Address</span>
                                <span class="value">${email}</span>
                            </div>
                            <div class="field">
                                <span class="label">Phone Number</span>
                                <span class="value">${phone}</span>
                            </div>
                            <div class="field">
                                <span class="label">Requested Service</span>
                                <span class="value">${service}</span>
                            </div>
                            <div class="field" style="border: none;">
                                <span class="label">Message</span>
                                <div class="message-box">
                                    ${message.replace(/\n/g, '<br>')}
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>This message was sent from the Kanchan Singh Makeup Studio contact form.</p>
                            <p>&copy; 2026 Kanchan Singh. All rights reserved.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}

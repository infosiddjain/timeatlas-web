import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message fields are required.' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || 'infosiddjain@gmail.com';
    const smtpPass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : '';

    if (!smtpPass) {
      console.error('SMTP_PASS environment variable is missing');
      return NextResponse.json(
        { error: 'Email service configuration error.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer Transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name} via TimeAtlas" <${smtpUser}>`,
      to: 'infosiddjain@gmail.com',
      replyTo: email,
      subject: `[TimeAtlas Contact] ${category || 'General'}: ${subject || 'New Inquiry'}`,
      text: `
New Contact Form Submission from TimeAtlas Website

Name: ${name}
Email: ${email}
Category: ${category || 'General Inquiry'}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; rounded-radius: 8px;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">TimeAtlas Contact Form</h2>
          <p><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
          <p><strong>Category:</strong> ${category || 'General Inquiry'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 6px;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">This email was sent from the contact form on TimeAtlas website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

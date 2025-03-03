import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// E-Mail-Validierungsfunktion
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    // E-Mail-Format validieren
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' },
        { status: 400 }
      );
    }

    try {
      // E-Mail-Transporter konfigurieren
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER || 'smtp.example.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER || 'user@example.com',
          pass: process.env.EMAIL_PASSWORD || 'password',
        },
      });

      // E-Mail-Inhalt
      const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@gebaeudereinigung-puetz.de',
        to: process.env.EMAIL_TO || 'info@gebaeudereinigung-puetz.de',
        subject: `Neue Kontaktanfrage von ${name}`,
        replyTo: email,
        text: `
          Name: ${name}
          E-Mail: ${email}
          Telefon: ${phone || 'Nicht angegeben'}
          Gewünschte Leistung: ${service || 'Nicht angegeben'}
          
          Nachricht:
          ${message}
        `,
        html: `
          <h2>Neue Kontaktanfrage über die Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
          <p><strong>Gewünschte Leistung:</strong> ${service || 'Nicht angegeben'}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // E-Mail senden
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Fehler beim Senden der E-Mail:', emailError);
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Fehler bei der Verarbeitung der Anfrage:', error);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
} 
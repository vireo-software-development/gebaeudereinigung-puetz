import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Hilfsfunktion für gefährliche Zeichen
const forbiddenPattern = /[<>;"'\\/|&$]/g
// Hilfsfunktion für Telefonnummer
function isValidPhone(phone: string) {
  return /^[0-9+\- ]*$/.test(phone)
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const vorname = formData.get("vorname") as string
  const nachname = formData.get("nachname") as string
  const email = formData.get("email") as string
  const telefon = formData.get("telefon") as string
  const geburtsdatum = formData.get("geburtsdatum") as string
  const adresse = formData.get("adresse") as string
  const eintritt = formData.get("eintritt") as string
  const gehalt = formData.get("gehalt") as string
  const motivation = formData.get("motivation") as string
  const jobTitle = formData.get("jobTitle") as string | undefined
  
  // Prüfe, ob mindestens eine Datei hochgeladen wurde
  const hasFiles = Array.from(formData.keys()).some(key => key === "file" || key.startsWith("file_"))

  if (!vorname || !nachname || !email || !motivation) {
    return NextResponse.json({ error: "Vorname, Nachname, E-Mail und Motivation sind erforderlich" }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }, { status: 400 })
  }
  if (telefon && !isValidPhone(telefon)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige Telefonnummer ein (nur Ziffern, +, - und Leerzeichen)." }, { status: 400 })
  }
  // Prüfe alle Felder auf gefährliche Zeichen
  for (const [key, value] of Object.entries({vorname, nachname, email, telefon, geburtsdatum, adresse, eintritt, gehalt, motivation})) {
    if (typeof value === "string" && forbiddenPattern.test(value)) {
      return NextResponse.json({ error: `Ungültige Zeichen im Feld ${key}.` }, { status: 400 })
    }
  }
  
  // Sammle alle hochgeladenen Dateien
  const attachments = []
  for (const [key, value] of formData.entries()) {
    if ((key === "file" || key.startsWith("file_")) && value instanceof File) {
      if (value.type !== "application/pdf") {
        return NextResponse.json({ error: "Nur PDF-Dateien sind erlaubt." }, { status: 400 })
      }
      
      const arrayBuffer = await value.arrayBuffer()
      attachments.push({
        filename: value.name,
        content: Buffer.from(arrayBuffer),
        contentType: value.type,
      })
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.example.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD || 'password',
      },
    });

    const subject = jobTitle
      ? `Bewerbung auf: ${jobTitle}`
      : "Initiativbewerbung über die Website";
    const mailText = `
      Vorname: ${vorname}
      Nachname: ${nachname}
      E-Mail: ${email}
      Telefon: ${telefon || 'Nicht angegeben'}
      Geburtsdatum: ${geburtsdatum || 'Nicht angegeben'}
      Adresse: ${adresse || 'Nicht angegeben'}
      Frühester Eintrittstermin: ${eintritt || 'Nicht angegeben'}
      Gehaltsvorstellung: ${gehalt || 'Nicht angegeben'}
      ${jobTitle ? `Stelle: ${jobTitle}\n` : ''}
      Motivation/Anschreiben:\n${motivation}
      
      Anhänge: ${attachments.length > 0 ? attachments.map(a => a.filename).join(", ") : "Keine Anhänge"}
    `;
    const mailHtml = `
      <h2>Neue Bewerbung über die Website</h2>
      <p><strong>Vorname:</strong> ${vorname}</p>
      <p><strong>Nachname:</strong> ${nachname}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon || 'Nicht angegeben'}</p>
      <p><strong>Geburtsdatum:</strong> ${geburtsdatum || 'Nicht angegeben'}</p>
      <p><strong>Adresse:</strong> ${adresse || 'Nicht angegeben'}</p>
      <p><strong>Frühester Eintrittstermin:</strong> ${eintritt || 'Nicht angegeben'}</p>
      <p><strong>Gehaltsvorstellung:</strong> ${gehalt || 'Nicht angegeben'}</p>
      ${jobTitle ? `<p><strong>Stelle:</strong> ${jobTitle}</p>` : ''}
      <p><strong>Motivation/Anschreiben:</strong></p>
      <p>${motivation.replace(/\n/g, '<br>')}</p>
      ${attachments.length > 0 ? 
        `<p><strong>Anhänge:</strong> ${attachments.map(a => a.filename).join(", ")}</p>` : 
        '<p><strong>Anhänge:</strong> Keine Anhänge</p>'}
    `;

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@gebaeudereinigung-puetz.de',
      to: process.env.EMAIL_TO || 'info@gebaeudereinigung-puetz.de',
      subject,
      replyTo: email,
      text: mailText,
      html: mailHtml,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (emailError) {
    console.error('Fehler beim Senden der E-Mail:', emailError);
    return NextResponse.json({ error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.' }, { status: 500 });
  }
} 
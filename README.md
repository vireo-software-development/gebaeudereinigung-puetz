# Gebäudereinigung Pütz UG Website

Dies ist die offizielle Website der Gebäudereinigung Pütz UG.

## Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## Kontaktformular konfigurieren

Das Kontaktformular verwendet Nodemailer, um E-Mails zu senden. Um das Kontaktformular zu konfigurieren, erstellen Sie eine `.env.local`-Datei im Stammverzeichnis des Projekts mit den folgenden Umgebungsvariablen:

```
EMAIL_SERVER=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=user@example.com
EMAIL_PASSWORD=your_password
EMAIL_FROM=noreply@gebaeudereinigung-puetz.de
EMAIL_TO=info@gebaeudereinigung-puetz.de
```

Ersetzen Sie die Werte durch Ihre eigenen SMTP-Servereinstellungen.

## Deployment

```bash
# Build für Produktion erstellen
npm run build

# Produktion starten
npm start
```

## DSGVO-Konformität

Die Website enthält folgende DSGVO-konforme Elemente:

- Datenschutzerklärung
- Impressum
- Cookie-Consent-Banner
- Kontaktformular mit Datenschutzhinweis

## SEO-Optimierung

Die Website ist für Suchmaschinen optimiert mit:

- Meta-Tags
- Strukturierte Daten (Schema.org)
- Sitemap
- Robots.txt 
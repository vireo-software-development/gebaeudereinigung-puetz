import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import "./globals.css"
import { FloatingContact } from "@/components/ui/floating-contact"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { CookieConsent } from "@/components/cookie-consent"
import { Footer } from "@/components/ui/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.puetz-reinigung.de"),
  title: "Gebäudereinigung Pütz UG - Professionelle Reinigungsdienstleistungen",
  description:
    "Ihr zuverlässiger Partner für professionelle Gebäudereinigung in der Region. Büroreinigung, Fensterreinigung und mehr. ✓ Erfahren ✓ Zuverlässig ✓ Qualitativ",
  keywords: [
    "Gebäudereinigung",
    "Büroreinigung",
    "Fensterreinigung",
    "Reinigungsservice",
    "Gebäudereinigung Pütz",
    "Pütz UG",
    "Reinigungsfirma",
    "Professionelle Reinigung",
    "Unterhaltsreinigung",
    "Grundreinigung",
  ],
  authors: [{ name: "Gebäudereinigung Pütz UG" }],
  creator: "Gebäudereinigung Pütz UG",
  publisher: "Gebäudereinigung Pütz UG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.puetz-reinigung.de",
    title: "Gebäudereinigung Pütz UG - Professionelle Reinigungsdienstleistungen",
    description:
      "Ihr zuverlässiger Partner für professionelle Gebäudereinigung. Qualität und Zuverlässigkeit seit Jahren.",
    siteName: "Gebäudereinigung Pütz UG",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gross_seitlich-1XwUN6JPdEzzx8dGdMnOEfBmu7Pns3.png",
        width: 1200,
        height: 630,
        alt: "Gebäudereinigung Pütz UG Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung Pütz UG",
    description: "Professionelle Reinigungsdienstleistungen",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gross_seitlich-1XwUN6JPdEzzx8dGdMnOEfBmu7Pns3.png",
    ],
  },
  alternates: {
    canonical: "https://www.puetz-reinigung.de",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00C2FF" />
      </head>
      <body className={inter.className}>
        <FloatingContact />
        <ScrollToTop />
        <CookieConsent />
        {children}
        <Footer />
        
        {/* Google Tag Manager - wird nur geladen, wenn Consent gegeben wurde */}
        <Script id="gtm-consent-check" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            
            // Prüfen, ob Consent bereits gegeben wurde
            try {
              const consent = localStorage.getItem('cookie-consent');
              if (consent) {
                const preferences = JSON.parse(consent);
                
                // Consent-Status an GTM senden
                window.dataLayer.push({
                  'event': 'consent_status',
                  'analytics_consent': preferences.analytics || false,
                  'marketing_consent': preferences.marketing || false
                });
              }
            } catch (e) {
              console.error('Fehler beim Lesen der Cookie-Einstellungen:', e);
            }
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `}
        </Script>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}

import './globals.css'
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { SchemaOrg } from "@/components/schema-org"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gebaeudereinigung-puetz.de"),
  title: "Gebäudereinigung Pütz UG - Professionelle Reinigungsdienstleistungen",
  description:
    "Ihr zuverlässiger Partner für professionelle Gebäudereinigung und Reinigungsdienstleistungen in der Region. ✓ Erfahren ✓ Zuverlässig ✓ Qualitativ",
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
    url: "https://www.gebaeudereinigung-puetz.de",
    title: "Gebäudereinigung Pütz UG - Professionelle Reinigungsdienstleistungen",
    description:
      "Ihr zuverlässiger Partner für professionelle Gebäudereinigung. Qualität und Zuverlässigkeit seit Jahren.",
    siteName: "Gebäudereinigung Pütz UG",
    images: [
      {
        url: "/screenshot.png",
        width: 2930,
        height: 1560,
        alt: "Gebäudereinigung Pütz UG Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung Pütz UG",
    description: "Professionelle Reinigungsdienstleistungen",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.gebaeudereinigung-puetz.de",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00C2FF" />
        <SchemaOrg />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}


"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ParallaxHero } from "@/components/ui/parallax-hero"

// Schema.org strukturierte Daten
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gebäudereinigung Pütz UG",
  image: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gross_seitlich-1XwUN6JPdEzzx8dGdMnOEfBmu7Pns3.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-6T9B2TF0wPpVagYHlehwytUsj8ADj3.png",
  ],
  "@id": "https://www.gebaeudereinigung-puetz.de",
  url: "https://www.gebaeudereinigung-puetz.de",
  telephone: "+49-2403-5192438",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Talstraße 154",
    addressLocality: "Eschweiler",
    postalCode: "52249",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8123, 
    longitude: 6.2685,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: ["https://www.facebook.com/gebaeudereinigung.puetz"],
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gross_seitlich-1XwUN6JPdEzzx8dGdMnOEfBmu7Pns3.png"
              alt="Gebäudereinigung Pütz UG Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium hover:text-[#00C2FF] transition-colors">
              Leistungen
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#00C2FF] transition-colors">
              Über uns
            </Link>
            <Link href="/karriere" className="text-sm font-medium hover:text-[#00C2FF] transition-colors">
              Karriere
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#00C2FF] transition-colors">
              Kontakt
            </Link>
            <Button 
              className="bg-[#00C2FF] hover:bg-[#00A8E0] shadow-rombo"
              onClick={() => (window.location.href = "tel:+4924035192438")}
            >
              <Phone className="mr-2 h-4 w-4" /> Anruf anfordern
            </Button>
          </nav>
          <Button 
            className="md:hidden bg-[#00C2FF] hover:bg-[#00A8E0]"
            onClick={() => (window.location.href = "tel:+4924035192438")}
          >
            <Phone className="mr-2 h-4 w-4" /> Anrufen
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <ParallaxHero />
        <section id="services" className="w-full py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00C2FF]/10 px-3 py-1 text-sm text-[#00C2FF]">
                  Unsere Leistungen
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Was wir für Sie tun können</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen für Unternehmen jeder Größe.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#00C2FF]/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M7 17v-5h.01" />
                      <path d="M11 17v-9h.01" />
                      <path d="M15 17v-3h.01" />
                      <path d="M19 17v-7h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Büroreinigung</h3>
                  <p className="text-muted-foreground">
                    Regelmäßige Reinigung von Büroräumen, Empfangsbereichen und Gemeinschaftsflächen.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#00C2FF]/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                      <path d="M3 16V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
                      <path d="M21 16H3" />
                      <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
                      <path d="M10 2v4" />
                      <path d="M14 2v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Fensterreinigung</h3>
                  <p className="text-muted-foreground">
                    Professionelle Reinigung von Fenstern, Glasflächen und Fassaden für einen klaren Durchblick.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#00C2FF]/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                      <path d="M13 13h4" />
                      <path d="M13 17h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Grundreinigung</h3>
                  <p className="text-muted-foreground">
                    Intensive Reinigung von Böden, Teppichen und schwer zugänglichen Bereichen.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#00C2FF]/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                      <path d="M8 7v10" />
                      <path d="M12 7v10" />
                      <path d="M16 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Industriereinigung</h3>
                  <p className="text-muted-foreground">
                    Spezielle Reinigungslösungen für Produktionsstätten, Lagerhallen und Industrieanlagen.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#00C2FF]/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12h20" />
                      <path d="M2 12v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8" />
                      <path d="M7 8v4" />
                      <path d="M17 8v4" />
                      <path d="M7 8a5 5 0 0 1 10 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Sanitärreinigung</h3>
                  <p className="text-muted-foreground">
                    Gründliche Reinigung und Desinfektion von Sanitäranlagen für höchste Hygienestandards.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#00C2FF]/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Sonderreinigung</h3>
                  <p className="text-muted-foreground">
                    Spezialreinigungen nach Bauarbeiten, Umzügen oder besonderen Ereignissen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-6 md:py-12 lg:py-24 bg-[#00C2FF]/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-nathan-cowley-713297.jpg-8UhsaWT6idEtcDyqlMaoXRQ9YmTvJA.jpeg"
                alt="Über Gebäudereinigung Pütz UG"
                width={400}
                height={400}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#00C2FF]/10 px-3 py-1 text-sm text-[#00C2FF]">Über uns</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ihr zuverlässiger Partner für Sauberkeit
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed">
                  Die Gebäudereinigung Pütz UG steht für Qualität, Zuverlässigkeit und Kundenzufriedenheit. Mit
                  jahrelanger Erfahrung und einem engagierten Team sorgen wir dafür, dass Ihre Räumlichkeiten stets in
                  einem einwandfreien Zustand sind.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Erfahrenes und geschultes Personal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Moderne Reinigungstechniken und -geräte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Umweltfreundliche Reinigungsmittel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C2FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Flexible Terminvereinbarung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Warum uns wählen?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wir bieten Ihnen einen umfassenden Service, der auf Ihre individuellen Bedürfnisse zugeschnitten ist.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00C2FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Qualität</h3>
                <p className="text-muted-foreground">
                  Wir legen größten Wert auf Qualität und Sorgfalt bei jeder Reinigung.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00C2FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Zuverlässigkeit</h3>
                <p className="text-muted-foreground">
                  Pünktlichkeit und Zuverlässigkeit sind für uns selbstverständlich.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00C2FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Kundenzufriedenheit</h3>
                <p className="text-muted-foreground">
                  Die Zufriedenheit unserer Kunden steht für uns an erster Stelle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-24 bg-[#00C2FF]/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00C2FF]/10 px-3 py-1 text-sm text-[#00C2FF]">Kontakt</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nehmen Sie Kontakt mit uns auf</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu unseren Dienstleistungen.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#00C2FF]" />
                  <div>
                    <h3 className="font-bold">Telefon</h3>
                    <p className="text-muted-foreground">+49 2403 5192438</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#00C2FF]" />
                  <div>
                    <h3 className="font-bold">E-Mail</h3>
                    <p className="text-muted-foreground">info@gebaeudereinigung-puetz.de</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#00C2FF]" />
                  <div>
                    <h3 className="font-bold">Adresse</h3>
                    <p className="text-muted-foreground">Talstraße 154, 52249 Eschweiler</p>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Geschäftszeiten</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Montag - Donnerstag:</div>
                    <div>08:00 - 16:00 Uhr</div>
                    <div>Freitag:</div>
                    <div>08:00 - 12:00 Uhr</div>
                    <div>Samstag & Sonntag:</div>
                    <div>Geschlossen</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        E-Mail
                      </label>
                      <Input id="email" placeholder="Ihre E-Mail" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Betreff
                    </label>
                    <Input id="subject" placeholder="Betreff Ihrer Anfrage" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nachricht
                    </label>
                    <Textarea id="message" placeholder="Ihre Nachricht" className="min-h-[150px]" />
                  </div>
                  <Button className="bg-[#00C2FF] hover:bg-[#00A8E0] w-full">Nachricht senden</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


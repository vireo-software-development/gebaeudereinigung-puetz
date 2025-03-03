import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const jobs = [
  {
    title: "Reinigungskraft (m/w/d)",
    type: "Vollzeit/Teilzeit",
    location: "Verschiedene Standorte",
    description:
      "Wir suchen engagierte Reinigungskräfte für die professionelle Reinigung von Bürogebäuden und Geschäftsräumen.",
    requirements: [
      "Erfahrung in der Gebäudereinigung",
      "Zuverlässigkeit und Genauigkeit",
      "Teamfähigkeit",
      "Führerschein Klasse B von Vorteil",
    ],
    benefits: ["Faire Bezahlung", "Flexible Arbeitszeiten", "Moderne Arbeitsmittel", "Weiterbildungsmöglichkeiten"],
  },
  {
    title: "Objektleiter (m/w/d)",
    type: "Vollzeit",
    location: "Hauptstandort",
    description:
      "Als Objektleiter sind Sie verantwortlich für die Koordination und Überwachung der Reinigungsarbeiten in verschiedenen Objekten.",
    requirements: [
      "Mehrjährige Berufserfahrung in der Gebäudereinigung",
      "Führungserfahrung",
      "Organisationstalent",
      "Führerschein Klasse B",
    ],
    benefits: ["Attraktives Gehalt", "Dienstwagen", "Weiterbildungen", "Verantwortungsvolle Position"],
  },
]

export default function KarrierePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gross_seitlich-1XwUN6JPdEzzx8dGdMnOEfBmu7Pns3.png"
              alt="Gebäudereinigung Pütz UG Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Button asChild variant="outline">
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#00C2FF]/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-up">
                  Karriere bei Pütz
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-up">
                  Werden Sie Teil unseres Teams und starten Sie Ihre Karriere in einem wachsenden Unternehmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {jobs.map((job, index) => (
                <Card key={index} className="shadow-rombo">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{job.description}</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="requirements">
                        <AccordionTrigger>Anforderungen</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-4 space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="benefits">
                        <AccordionTrigger>Wir bieten</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-4 space-y-1">
                            {job.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Button className="w-full bg-[#00C2FF] hover:bg-[#00A8E0]">
                      <Mail className="mr-2 h-4 w-4" />
                      Jetzt bewerben
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#00C2FF]/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Warum Pütz?</h2>
                <p className="text-muted-foreground">
                  Bei uns erwartet Sie ein dynamisches Arbeitsumfeld mit vielen Entwicklungsmöglichkeiten. Wir legen
                  Wert auf:
                </p>
                <ul className="space-y-2">
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
                    <span>Faire Arbeitsbedingungen</span>
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
                    <span>Persönliche Entwicklung</span>
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
                    <span>Teamorientierte Arbeitsweise</span>
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
                    <span>Moderne Arbeitsmittel</span>
                  </li>
                </ul>
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-tima-miroshnichenko-6195111.jpg-KxqOiiuGfZb2LfWRXi0nzbjpVgiU4A.jpeg"
                alt="Team bei der Arbeit"
                width={500}
                height={500}
                className="rounded-lg shadow-rombo object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


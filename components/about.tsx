import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function About() {
  const benefits = [
    "Über 10 Jahre Erfahrung in der Gebäudereinigung",
    "Qualifiziertes und geschultes Personal",
    "Umweltfreundliche Reinigungsmittel",
    "Flexible Terminvereinbarung",
    "Maßgeschneiderte Reinigungspläne",
    "Faire und transparente Preise",
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/stock3.jpg" alt="Unser Team" fill className="object-cover" />
          </div>

          <div>
            <h2 className="section-title mb-6">Über Gebäudereinigung Pütz UG</h2>
            <p className="text-lg mb-6">
              Seit unserer Gründung steht Gebäudereinigung Pütz UG für Qualität, Zuverlässigkeit und
              Kundenzufriedenheit. Als Familienunternehmen legen wir großen Wert auf persönlichen Service und
              maßgeschneiderte Lösungen für unsere Kunden.
            </p>
            <p className="text-lg mb-8">
              Unser qualifiziertes Team sorgt mit modernster Ausrüstung und umweltfreundlichen Reinigungsmitteln für ein
              optimales Ergebnis. Wir sind Ihr zuverlässiger Partner für alle Reinigungsaufgaben – vom kleinen
              Privathaushalt bis zum großen Bürokomplex.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import { Building2, Home, Droplets, Sparkles, Building, Brush } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Büroreinigung",
      description: "Professionelle Reinigung von Büroräumen und Geschäftsgebäuden für ein sauberes Arbeitsumfeld.",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Haushaltsreinigung",
      description: "Gründliche Reinigung von Privathaushalten nach Ihren individuellen Wünschen und Bedürfnissen.",
    },
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: "Fensterreinigung",
      description: "Streifenfreie Reinigung von Fenstern, Glasflächen und Fassaden für maximale Transparenz.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Grundreinigung",
      description: "Intensive Grundreinigung für stark verschmutzte Bereiche und nach Renovierungen oder Umzügen.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Treppenhausreinigung",
      description: "Regelmäßige Reinigung von Treppenhäusern und Gemeinschaftsflächen in Mehrfamilienhäusern.",
    },
    {
      icon: <Brush className="h-10 w-10 text-primary" />,
      title: "Sonderreinigung",
      description: "Spezialreinigungen wie Teppichreinigung, Polsterreinigung und Desinfektionsreinigung.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-subtitle mx-auto">
            Wir bieten ein breites Spektrum an professionellen Reinigungsdienstleistungen für Unternehmen und
            Privathaushalte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link href="#contact" className="text-primary font-medium hover:underline inline-flex items-center">
                Mehr erfahren
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#contact" className="btn-primary">
            Angebot anfordern
          </Link>
        </div>
      </div>
    </section>
  )
}


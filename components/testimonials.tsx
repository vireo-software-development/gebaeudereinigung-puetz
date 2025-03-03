import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Schmidt",
      company: "Schmidt & Partner GmbH",
      image: "/placeholder.svg?height=100&width=100",
      text: "Wir arbeiten seit über 3 Jahren mit Gebäudereinigung Pütz UG zusammen und sind äußerst zufrieden. Die Reinigungsleistung ist stets auf höchstem Niveau und das Team ist sehr zuverlässig und flexibel.",
      rating: 5,
    },
    {
      name: "Sabine Müller",
      company: "Müller Immobilien",
      image: "/placeholder.svg?height=100&width=100",
      text: "Die Zusammenarbeit mit Gebäudereinigung Pütz UG ist unkompliziert und professionell. Besonders die Treppenhausreinigung in unseren Mehrfamilienhäusern wird immer zur vollsten Zufriedenheit ausgeführt.",
      rating: 5,
    },
    {
      name: "Thomas Weber",
      company: "Weber IT Solutions",
      image: "/placeholder.svg?height=100&width=100",
      text: "Seit wir die Büroreinigung an Gebäudereinigung Pütz UG übertragen haben, können wir uns voll auf unser Kerngeschäft konzentrieren. Die Qualität der Reinigung ist hervorragend und das Preis-Leistungs-Verhältnis stimmt.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Das sagen unsere Kunden</h2>
          <p className="section-subtitle mx-auto">
            Erfahren Sie, was unsere Kunden über unsere Reinigungsdienstleistungen sagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


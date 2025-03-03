"use client"

import { Card, CardContent } from "./card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"

const testimonials = [
  {
    name: "Max Mustermann",
    company: "Musterfirma GmbH",
    text: "Hervorragende Arbeit! Die Reinigung war gründlich und das Team sehr professionell.",
  },
  {
    name: "Anna Schmidt",
    company: "Schmidt & Partner",
    text: "Wir sind sehr zufrieden mit der Qualität der Reinigung. Besonders die Fensterreinigung ist erstklassig.",
  },
  {
    name: "Thomas Weber",
    company: "Weber Immobilien",
    text: "Zuverlässiger Service und flexible Terminvereinbarung. Sehr zu empfehlen!",
  },
]

export function Testimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="border-none shadow-rombo">
              <CardContent className="p-6 flex flex-col space-y-4">
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


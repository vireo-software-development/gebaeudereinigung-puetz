"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"

const faqs = [
  {
    question: "Wie oft sollte eine professionelle Reinigung durchgeführt werden?",
    answer:
      "Die Häufigkeit hängt von verschiedenen Faktoren ab, wie der Nutzungsintensität und Art der Räumlichkeiten. Für Büros empfehlen wir in der Regel eine tägliche Grundreinigung und vierteljährliche Intensivreinigung.",
  },
  {
    question: "Welche Reinigungsmittel verwenden Sie?",
    answer:
      "Wir setzen auf umweltfreundliche und hochwertige Reinigungsmittel, die effektiv und dabei schonend für Oberflächen und Umwelt sind. Alle unsere Produkte entsprechen den aktuellen Umweltstandards.",
  },
  {
    question: "Bieten Sie auch Wochenend- oder Feiertagsservice an?",
    answer:
      "Ja, wir bieten flexible Termine auch an Wochenenden oder Feiertagen an. Sprechen Sie uns an, wir finden gemeinsam die beste Lösung für Ihre Bedürfnisse.",
  },
  {
    question: "Sind Ihre Mitarbeiter versichert?",
    answer:
      "Ja, alle unsere Mitarbeiter sind umfassend versichert. Zudem verfügen wir über eine Betriebshaftpflichtversicherung für maximale Sicherheit.",
  },
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-none shadow-rombo mb-4">
          <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
          <AccordionContent className="px-4 pb-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}


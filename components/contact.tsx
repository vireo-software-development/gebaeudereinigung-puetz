"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Timeout für die Anfrage setzen (15 Sekunden)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Die Anfrage hat zu lange gedauert. Bitte versuchen Sie es später erneut.'));
      }, 15000);
    });

    try {
      // Race zwischen der Fetch-Anfrage und dem Timeout
      const response = await Promise.race([
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }),
        timeoutPromise
      ]) as Response;

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Fehler beim Parsen der JSON-Antwort:', jsonError);
        throw new Error('Serverfehler: Die Antwort konnte nicht verarbeitet werden. Bitte versuchen Sie es später erneut.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Nachricht');
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Fehler beim Senden des Formulars:', err);
      setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Kontaktieren Sie uns</h2>
          <p className="section-subtitle mx-auto">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Kontaktieren Sie uns noch heute!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 mb-6">
                  Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.
                </div>
              ) : null}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-4 mb-6">
                  <p className="font-medium">Fehler beim Senden der Nachricht:</p>
                  <p>{error}</p>
                  <p className="mt-2 text-sm">
                    Sollte das Problem weiterhin bestehen, kontaktieren Sie uns bitte telefonisch unter +49 2403 5192438 oder per E-Mail an info@gebaeudereinigung-puetz.de.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                      Gewünschte Leistung
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="Büroreinigung">Büroreinigung</option>
                      <option value="Haushaltsreinigung">Haushaltsreinigung</option>
                      <option value="Fensterreinigung">Fensterreinigung</option>
                      <option value="Grundreinigung">Grundreinigung</option>
                      <option value="Treppenhausreinigung">Treppenhausreinigung</option>
                      <option value="Sonderreinigung">Sonderreinigung</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <p className="text-muted-foreground">+49 2403 5192438</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">E-Mail</h4>
                    <p className="text-muted-foreground">info@gebaeudereinigung-puetz.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-muted-foreground">
                      Obstwiese 38
                      <br />
                      52459 Inden
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Öffnungszeiten</h4>
                    <p className="text-muted-foreground">
                      Montag - Donnerstag: 8:00 - 16:00 Uhr
                      <br />
                      Freitag: 8:00 - 12:00
                      <br />
                      Samstag & Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Unser Einzugsgebiet</h3>
              <p className="text-muted-foreground mb-4">
                Wir bieten unsere Reinigungsdienstleistungen in Düren und Umgebung an, einschließlich:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Köln
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aachen
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Eschweiler
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inden
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Düren
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Jülich
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobListing } from "@/components/job-listing"

export default function KarrierePage() {
  const jobs = [
    {
      id: 1,
      title: "Reinigungskraft (m/w/d)",
      location: "Aachen",
      type: "Teilzeit",
      description: "Wir suchen zuverlässige Reinigungskräfte für die tägliche Reinigung unserer Objekte.",
      requirements: [
        "Erfahrung in der Gebäudereinigung",
        "Zuverlässigkeit und Pünktlichkeit",
        "Selbstständiges Arbeiten",
        "Führerschein Klasse B",
        "Gute Deutschkenntnisse in Wort und Schrift"
      ],
    },
    {
      id: 2,
      title: "Reinigungskraft (m/w/d)",
      location: "Düren",
      type: "Teilzeit",
      description:
        "Wir suchen zuverlässige Reinigungskräfte für die tägliche Reinigung unserer Objekte.",
      requirements: [
        "Erfahrung in der Gebäudereinigung",
        "Zuverlässigkeit und Pünktlichkeit",
        "Selbstständiges Arbeiten",
        "Führerschein Klasse B",
        "Gute Deutschkenntnisse in Wort und Schrift"
      ],
    },
    {
      id: 3,
      title: "Reinigungskraft (m/w/d)",
      location: "Eschweiler",
      type: "Teilzeit",
      description: "Wir suchen zuverlässige Reinigungskräfte für die tägliche Reinigung unserer Objekte.",
      requirements: [
        "Erfahrung in der Gebäudereinigung",
        "Zuverlässigkeit und Pünktlichkeit",
        "Selbstständiges Arbeiten",
        "Führerschein Klasse B",
        "Gute Deutschkenntnisse in Wort und Schrift"
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="py-16 bg-muted">
        <div className="container">
          <h1 className="section-title">Karriere bei Gebäudereinigung Pütz UG</h1>
          <p className="section-subtitle">
            Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Gebäudereinigung.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Aktuelle Stellenangebote</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Initiativbewerbung</h2>
            <p className="mb-6">
              Sie haben keine passende Stelle gefunden? Wir freuen uns auch über Ihre Initiativbewerbung!
            </p>
            <Link href="/karriere/bewerben" className="btn-primary">
              Jetzt bewerben
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


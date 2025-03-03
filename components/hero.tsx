import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Reinigungsdienst Hintergrund"
          fill
          className="object-cover object-[35%_35%] opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary mb-6">
              <span className="text-sm font-medium">Professionelle Gebäudereinigung</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Beste Reinigungsdienstleistungen in Ihrer Region!
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Wir bieten professionelle Reinigungsdienstleistungen für Unternehmen und Privathaushalte. Zuverlässig,
              gründlich und zu fairen Preisen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services" className="btn-primary">
                Unsere Leistungen
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      ></div>
    </section>
  )
}


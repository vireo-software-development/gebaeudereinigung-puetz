import Image from "next/image"
import Link from "next/link"
import { CookieSettingsButton } from "./cookie-settings-button"

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">Gebäudereinigung Pütz UG</h3>
            <p className="text-white/80 mb-4">
              Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen in Köln und Umgebung.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/gebaeudereinigung.puetz" aria-label="Facebook" className="text-white/80 hover:text-primary">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-white/80 hover:text-primary">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
            <div className="mt-6">
              <Image
                src="/die-gebaeudedienstleister-innung-koeln-aachen-logo.svg"
                alt="Die Gebäudedienstleister Innung Köln-Aachen"
                width={459}
                height={122}
                className="w-full max-w-[230px] h-auto"
                sizes="(max-width: 768px) 100vw, 230px"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary">
                  Büroreinigung
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary">
                  Haushaltsreinigung
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary">
                  Fensterreinigung
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary">
                  Grundreinigung
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary">
                  Treppenhausreinigung
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-primary">
                  Sonderreinigung
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nützliche Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-primary">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="text-white/80 hover:text-primary">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-primary">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-white/80 hover:text-primary">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-white/80 hover:text-primary">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/80">
                  Obstwiese 38
                  <br />
                  52459 Inden
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white/80">+49 2423 9509409</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white/80">info@gebaeudereinigung-puetz.de</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Gebäudereinigung Pütz UG. Alle Rechte vorbehalten.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/datenschutz" className="text-white/60 hover:text-primary text-sm">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-white/60 hover:text-primary text-sm">
                    Impressum
                  </Link>
                </li>
                <li>
                  <CookieSettingsButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


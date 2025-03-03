"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Clock } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="bg-secondary text-white py-2">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Rufen Sie uns an: +49 2403 5192438</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Mo - DO: 8:00 - 16:00 & Fr: 8:00 - 12:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://www.facebook.com/gebaeudereinigung.puetz" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 shadow-md">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-16 mr-2">
                <Image
                  src="/logo/logo.svg"
                  alt="Gebäudereinigung Pütz UG Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-lg font-bold text-secondary">
                Gebäudereinigung<span className="text-primary"> Pütz UG</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="font-medium text-secondary hover:text-primary">
                Home
              </Link>
              <Link href="#services" className="font-medium text-secondary hover:text-primary">
                Leistungen
              </Link>
              <Link href="#about" className="font-medium text-secondary hover:text-primary">
                Über uns
              </Link>
              <Link href="/karriere" className="font-medium text-secondary hover:text-primary">
                Karriere
              </Link>
              <Link href="#contact" className="font-medium text-secondary hover:text-primary">
                Kontakt
              </Link>
              <Link href="#contact" className="btn-primary">
                Angebot anfordern
              </Link>
            </nav>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6 text-secondary" /> : <Menu className="h-6 w-6 text-secondary" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-secondary hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="font-medium text-secondary hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Leistungen
              </Link>
              <Link
                href="#about"
                className="font-medium text-secondary hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="/karriere"
                className="font-medium text-secondary hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Karriere
              </Link>
              <Link
                href="#contact"
                className="font-medium text-secondary hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link href="#contact" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
                Angebot anfordern
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Gebäudereinigung Pütz UG. Alle Rechte vorbehalten.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              href="/impressum" 
              className="text-sm text-gray-600 hover:text-[#00C2FF] transition-colors"
            >
              Impressum
            </Link>
            <Link 
              href="/datenschutz" 
              className="text-sm text-gray-600 hover:text-[#00C2FF] transition-colors"
            >
              Datenschutz
            </Link>
            <button
              onClick={() => {
                // @ts-ignore
                if (typeof window !== 'undefined' && window.openCookieSettings) {
                  // @ts-ignore
                  window.openCookieSettings()
                }
              }}
              className="text-sm text-gray-600 hover:text-[#00C2FF] transition-colors cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 
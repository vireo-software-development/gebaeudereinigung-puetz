"use client"

import Link from "next/link"


export function CookieSettingsButton() {
  const openCookieSettings = () => {
    if (typeof window !== "undefined" && window.openCookieSettings) {
      window.openCookieSettings()
    }
  }

  return (
    <Link href="#"onClick={openCookieSettings} className="text-white/60 hover:text-primary text-sm">
    Cookie-Einstellungen
    </Link>
  )
} 
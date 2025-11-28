"use client"

import { useEffect } from "react"

const GOOGLE_ADS_ID = "AW-11250362448"

/**
 * Google Tag (gtag.js) Komponente für Google Ads Conversion Tracking
 * 
 * WICHTIG: Diese Komponente initialisiert das Google Tag nur, wenn der Nutzer
 * Marketing-Cookies akzeptiert hat. Das Script wird dynamisch von der
 * Cookie-Consent-Komponente geladen, um DSGVO-Konformität sicherzustellen.
 * 
 * Diese Komponente stellt sicher, dass gtag korrekt initialisiert wird,
 * nachdem das Script geladen wurde.
 */
export function GoogleTag() {
  useEffect(() => {
    // Prüfe Cookie-Zustimmung beim Mount und nach Änderungen
    const checkAndInitialize = () => {
      if (typeof window === "undefined") return

      const cookieConsent = localStorage.getItem("cookieConsent")
      const cookiePreferences = localStorage.getItem("cookiePreferences")

      if (cookieConsent === "true" && cookiePreferences) {
        try {
          const preferences = JSON.parse(cookiePreferences)
          if (preferences.marketing) {
            // Warte, bis das Script geladen wurde
            const checkScript = setInterval(() => {
              if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
                clearInterval(checkScript)
                
                // Initialisiere gtag, falls noch nicht geschehen
                if (!(window as any).gtag) {
                  ;(window as any).dataLayer = (window as any).dataLayer || []
                  
                  function gtag(...args: any[]) {
                    ;(window as any).dataLayer.push(args)
                  }
                  
                  ;(window as any).gtag = gtag
                  gtag("js", new Date())
                  gtag("config", GOOGLE_ADS_ID)
                }
              }
            }, 100)

            // Timeout nach 5 Sekunden
            setTimeout(() => clearInterval(checkScript), 5000)
          }
        } catch (e) {
          console.error("Fehler beim Parsen der Cookie-Präferenzen:", e)
        }
      }
    }

    // Prüfe sofort
    checkAndInitialize()

    // Event Listener für Cookie-Änderungen
    const handleConsentChange = () => {
      checkAndInitialize()
    }

    window.addEventListener("cookieConsentChanged", handleConsentChange)
    window.addEventListener("storage", handleConsentChange)

    return () => {
      window.removeEventListener("cookieConsentChanged", handleConsentChange)
      window.removeEventListener("storage", handleConsentChange)
    }
  }, [])

  return null
}


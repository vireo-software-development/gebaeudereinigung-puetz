"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import Link from "next/link"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Immer aktiviert
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Verzögerung hinzufügen, damit die Komponente nicht sofort erscheint
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent")
      if (!consent) {
        setShowConsent(true)
      } else {
        try {
          const savedPreferences = JSON.parse(consent)
          setCookiePreferences(savedPreferences)
        } catch (e) {
          // Bei Fehler: Zurücksetzen und neu anzeigen
          localStorage.removeItem("cookie-consent")
          setShowConsent(true)
        }
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(cookiePreferences))
    setShowConsent(false)
    applyConsentSettings(cookiePreferences)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setCookiePreferences(allAccepted)
    setShowConsent(false)
    applyConsentSettings(allAccepted)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    localStorage.setItem("cookie-consent", JSON.stringify(essentialOnly))
    setCookiePreferences(essentialOnly)
    setShowConsent(false)
    applyConsentSettings(essentialOnly)
  }

  const applyConsentSettings = (settings: typeof cookiePreferences) => {
    // Hier die entsprechenden Cookies/Skripte aktivieren oder deaktivieren
    if (settings.analytics) {
      // Analytics aktivieren (z.B. Google Analytics)
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'consent',
        analytics_consent: true
      })
    }
    
    if (settings.marketing) {
      // Marketing-Cookies aktivieren
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'consent',
        marketing_consent: true
      })
    }
  }

  const handleCookieToggle = (category: keyof typeof cookiePreferences) => {
    if (category === 'essential') return // Essential kann nicht deaktiviert werden
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const openCookieSettings = () => {
    setShowConsent(true)
  }

  // Globale Funktion zum Öffnen der Cookie-Einstellungen
  useEffect(() => {
    // @ts-ignore
    window.openCookieSettings = openCookieSettings
    
    return () => {
      // @ts-ignore
      delete window.openCookieSettings
    }
  }, [])

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade">
      <Card className="mx-auto max-w-2xl w-full shadow-rombo max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Cookie-Einstellungen</CardTitle>
          <CardDescription>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="essential" checked disabled />
              <Label htmlFor="essential" className="font-medium">Essenzielle Cookies</Label>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="functional" 
                checked={cookiePreferences.functional}
                onCheckedChange={() => handleCookieToggle('functional')}
              />
              <Label htmlFor="functional" className="font-medium">Funktionale Cookies</Label>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="analytics" 
                checked={cookiePreferences.analytics}
                onCheckedChange={() => handleCookieToggle('analytics')}
              />
              <Label htmlFor="analytics" className="font-medium">Analyse-Cookies</Label>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="marketing" 
                checked={cookiePreferences.marketing}
                onCheckedChange={() => handleCookieToggle('marketing')}
              />
              <Label htmlFor="marketing" className="font-medium">Marketing-Cookies</Label>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground pt-2">
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="text-[#00C2FF] hover:underline">
              Datenschutzerklärung
            </Link>.
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-end gap-4">
          <Button variant="outline" onClick={acceptEssential}>
            Nur Essenzielle
          </Button>
          <Button variant="outline" onClick={savePreferences}>
            Auswahl speichern
          </Button>
          <Button className="bg-[#00C2FF] hover:bg-[#00A8E0]" onClick={acceptAll}>
            Alle akzeptieren
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// Typdefinition für globales Fenster-Objekt
declare global {
  interface Window {
    openCookieSettings?: () => void;
    dataLayer?: any[];
  }
}


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
      const hasConsent = localStorage.getItem("cookieConsent")
      if (!hasConsent) {
        setShowConsent(true)
      }
    }, 1000)

    // Globale Funktion zum Öffnen der Cookie-Einstellungen
    if (typeof window !== "undefined") {
      window.openCookieSettings = openCookieSettings
    }

    return () => clearTimeout(timer)
  }, [])

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences))
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
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted))
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
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(essentialOnly))
    setCookiePreferences(essentialOnly)
    setShowConsent(false)
    applyConsentSettings(essentialOnly)
  }

  const applyConsentSettings = (settings: typeof cookiePreferences) => {
    // Google Analytics deaktivieren, wenn nicht zugestimmt
    if (!settings.analytics) {
      // Deaktiviere Google Analytics
      if (typeof window !== "undefined") {
        (window as any)["ga-disable-G-XXXXXXXX"] = true
      }
      
      // Lösche vorhandene Analytics-Cookies
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_ga_XXXXXXXX=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    } else {
      // Aktiviere Google Analytics, wenn zugestimmt
      if (typeof window !== "undefined") {
        (window as any)["ga-disable-G-XXXXXXXX"] = false;
        
        // Google Analytics initialisieren, falls noch nicht geschehen
        if (!(window as any).ga) {
          initializeAnalytics();
        }
      }
    }

    // Marketing-Cookies deaktivieren, wenn nicht zugestimmt
    if (!settings.marketing) {
      // Lösche Marketing-Cookies
      document.cookie = "_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      // Weitere Marketing-Cookies hier hinzufügen
    }
  }

  // Funktion zum Initialisieren von Google Analytics
  const initializeAnalytics = () => {
    if (typeof window !== "undefined" && cookiePreferences.analytics) {
      // Google Analytics Code hier einfügen
      // Beispiel:
      /*
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'G-XXXXXXXX', 'auto');
      ga('send', 'pageview');
      */
    }
  }

  const handleCookieToggle = (category: keyof typeof cookiePreferences) => {
    if (category === "essential") return // Essential kann nicht deaktiviert werden
    
    setCookiePreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const openCookieSettings = () => {
    // Lade gespeicherte Einstellungen, falls vorhanden
    const savedPreferences = localStorage.getItem("cookiePreferences")
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences))
    }
    setShowConsent(true)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Cookie-Einstellungen</CardTitle>
          <CardDescription>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Bitte wählen Sie,
            welche Arten von Cookies Sie akzeptieren möchten.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox id="essential" checked disabled />
              <div className="space-y-1 leading-none">
                <Label htmlFor="essential" className="font-medium">
                  Essentielle Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht
                  deaktiviert werden.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="functional"
                checked={cookiePreferences.functional}
                onCheckedChange={() => handleCookieToggle("functional")}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="functional" className="font-medium">
                  Funktionale Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. Videoeinbettungen und
                  Live-Chats.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="analytics"
                checked={cookiePreferences.analytics}
                onCheckedChange={() => handleCookieToggle("analytics")}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="analytics" className="font-medium">
                  Analyse-Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie
                  Informationen anonym sammeln und melden.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="marketing"
                checked={cookiePreferences.marketing}
                onCheckedChange={() => handleCookieToggle("marketing")}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="marketing" className="font-medium">
                  Marketing-Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu
                  schalten, die relevant und ansprechend für den einzelnen Benutzer sind.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            Weitere Informationen darüber, wie wir Ihre Daten verarbeiten, finden Sie in unserer{" "}
            <Link href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button variant="outline" onClick={acceptEssential} className="w-full sm:w-auto">
              Nur Essentiell
            </Button>
            <Button onClick={savePreferences} className="w-full sm:w-auto">
              Auswahl speichern
            </Button>
          </div>
          <Button onClick={acceptAll} variant="default" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
            Alle akzeptieren
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// Erweitere den Window-Typ für TypeScript
declare global {
  interface Window {
    openCookieSettings?: () => void;
    dataLayer?: any[];
  }
} 
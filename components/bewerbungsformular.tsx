'use client'

import React, { useState, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

interface BewerbungsformularProps {
  jobTitle?: string
}

export default function Bewerbungsformular({ jobTitle }: BewerbungsformularProps) {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    geburtsdatum: "",
    adresse: "",
    eintritt: "",
    gehalt: "",
    motivation: "",
    files: [] as File[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // const forbiddenPattern = /[<>;"'\\/|&$]/g
  // const validateField = (name: string, value: string) => {
  //   if (forbiddenPattern.test(value)) {
  //     return false
  //   }
  //   if (name === "email") {
  //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  //   }
  //   if (name === "telefon") {
  //     return /^[0-9+\- ]*$/.test(value)
  //   }
  //   return true
  // }
  // const [fieldErrors, setFieldErrors] = useState<{[key:string]:string}>({})

  const fieldRefs = {
    vorname: useRef<HTMLInputElement>(null),
    nachname: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    telefon: useRef<HTMLInputElement>(null),
    geburtsdatum: useRef<HTMLInputElement>(null),
    adresse: useRef<HTMLInputElement>(null),
    eintritt: useRef<HTMLInputElement>(null),
    gehalt: useRef<HTMLInputElement>(null),
    motivation: useRef<HTMLTextAreaElement>(null),
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    // if (!validateField(name, value)) {
    //   setFieldErrors(prev => ({ ...prev, [name]: "Ungültige Eingabe!" }))
    // } else {
    //   setFieldErrors(prev => ({ ...prev, [name]: "" }))
    // }
    if (type === "file") {
      const input = e.target as HTMLInputElement
      if (input.files && input.files.length > 0) {
        const files = Array.from(input.files)
        setFormData((prev) => ({ ...prev, files: [...prev.files, ...files.filter(f => f.type === "application/pdf")] }))
        if (fileInputRef.current) fileInputRef.current.value = ""
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, files: [...prev.files, file] }))
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleFileBoxClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    // const stringFields = [
    //   "vorname",
    //   "nachname",
    //   "email",
    //   "telefon",
    //   "geburtsdatum",
    //   "adresse",
    //   "eintritt",
    //   "gehalt",
    //   "motivation"
    // ] as const;
    // type StringField = typeof stringFields[number];
    // for (const key of stringFields) {
    //   const isOptional = ["telefon", "geburtsdatum", "adresse", "eintritt", "gehalt"].includes(key)
    //   if (isOptional && !formData[key]) continue
    //   const valid = validateField(key, formData[key])
    //   console.log(`[DEBUG] Feld: ${key}, Wert: '${formData[key]}', gültig: ${valid}`)
    //   if (!valid) {
    //     setError(`Bitte überprüfen Sie Ihre Eingabe im Feld "${key.charAt(0).toUpperCase() + key.slice(1)}".`)
    //     setIsSubmitting(false)
    //     setTimeout(() => fieldRefs[key]?.current?.focus(), 0)
    //     return
    //   }
    // }
    // if (Object.values(fieldErrors).some(msg => msg)) {
    //   const firstErrorKey = Object.keys(fieldErrors).find(k => fieldErrors[k]) as StringField | undefined
    //   if (firstErrorKey && fieldRefs[firstErrorKey]) {
    //     setTimeout(() => fieldRefs[firstErrorKey]?.current?.focus(), 0)
    //   }
    //   setError("Bitte überprüfen Sie Ihre Eingaben.")
    //   setIsSubmitting(false)
    //   return
    // }

    if (formData.files.length === 0) {
      setError("Bitte laden Sie mindestens eine PDF-Datei hoch.")
      setIsSubmitting(false)
      return
    }

    const data = new FormData()
    data.append("vorname", formData.vorname)
    data.append("nachname", formData.nachname)
    data.append("email", formData.email)
    data.append("telefon", formData.telefon)
    data.append("geburtsdatum", formData.geburtsdatum)
    data.append("adresse", formData.adresse)
    data.append("eintritt", formData.eintritt)
    data.append("gehalt", formData.gehalt)
    data.append("motivation", formData.motivation)
    formData.files.forEach((file, i) => data.append("file" + (formData.files.length > 1 ? `_${i+1}` : ""), file))
    if (jobTitle) data.append("jobTitle", jobTitle)

    try {
      const response = await fetch("/api/bewerbung", {
        method: "POST",
        body: data,
      })
      if (!response.ok) {
        throw new Error("Fehler beim Senden der Bewerbung.")
      }
      setIsSubmitted(true)
      setFormData({
        vorname: "",
        nachname: "",
        email: "",
        telefon: "",
        geburtsdatum: "",
        adresse: "",
        eintritt: "",
        gehalt: "",
        motivation: "",
        files: [],
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-primary/5">
        <section className="py-8 md:py-16 flex-1">
          <div className="container max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <div className="mb-6 flex items-center">
              <Link href="/karriere" className="flex items-center text-primary hover:underline mr-4">
                <ArrowLeft className="h-5 w-5 mr-1" /> Zurück
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">
                {jobTitle ? `Bewerbung auf: ${jobTitle}` : "Initiativbewerbung"}
              </h2>
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 mb-6">
                  Vielen Dank für Ihre Bewerbung! Wir melden uns zeitnah bei Ihnen.
                </div>
              )}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-4 mb-6">
                  <p className="font-medium">Fehler beim Senden der Bewerbung:</p>
                  <p>{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="vorname" className="block text-sm font-medium mb-1">Vorname *</label>
                    <input type="text" id="vorname" name="vorname" value={formData.vorname} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.vorname} />
                    {/* {fieldErrors.vorname && <span className="text-xs text-red-600">{fieldErrors.vorname}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="nachname" className="block text-sm font-medium mb-1">Nachname *</label>
                    <input type="text" id="nachname" name="nachname" value={formData.nachname} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.nachname} />
                    {/* {fieldErrors.nachname && <span className="text-xs text-red-600">{fieldErrors.nachname}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.email} />
                    {/* {fieldErrors.email && <span className="text-xs text-red-600">{fieldErrors.email}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium mb-1">Telefon</label>
                    <input type="tel" id="telefon" name="telefon" value={formData.telefon} onChange={handleChange} inputMode="tel" pattern="[0-9+\- ]*" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.telefon} />
                    {/* {fieldErrors.telefon && <span className="text-xs text-red-600">{fieldErrors.telefon}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="geburtsdatum" className="block text-sm font-medium mb-1">Geburtsdatum</label>
                    <input type="date" id="geburtsdatum" name="geburtsdatum" value={formData.geburtsdatum} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.geburtsdatum} />
                    {/* {fieldErrors.geburtsdatum && <span className="text-xs text-red-600">{fieldErrors.geburtsdatum}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="adresse" className="block text-sm font-medium mb-1">Adresse</label>
                    <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.adresse} />
                    {/* {fieldErrors.adresse && <span className="text-xs text-red-600">{fieldErrors.adresse}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="eintritt" className="block text-sm font-medium mb-1">Frühester Eintrittstermin</label>
                    <input type="date" id="eintritt" name="eintritt" value={formData.eintritt} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.eintritt} />
                    {/* {fieldErrors.eintritt && <span className="text-xs text-red-600">{fieldErrors.eintritt}</span>} */}
                  </div>
                  <div>
                    <label htmlFor="gehalt" className="block text-sm font-medium mb-1">Gehaltsvorstellung (optional)</label>
                    <input type="text" id="gehalt" name="gehalt" value={formData.gehalt} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.gehalt} />
                    {/* {fieldErrors.gehalt && <span className="text-xs text-red-600">{fieldErrors.gehalt}</span>} */}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="motivation" className="block text-sm font-medium mb-1">Motivation / Kurzes Anschreiben *</label>
                  <textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" ref={fieldRefs.motivation}></textarea>
                  {/* {fieldErrors.motivation && <span className="text-xs text-red-600">{fieldErrors.motivation}</span>} */}
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Anhänge (nur PDF, z.B. Lebenslauf, Zeugnisse)</label>
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={handleFileBoxClick}
                    className="flex flex-col items-center justify-center border-2 border-dashed border-primary bg-primary/5 rounded-lg cursor-pointer py-8 transition hover:bg-primary/10"
                    style={{ minHeight: 160 }}
                  >
                    <FileText className="h-12 w-12 text-primary mb-2" />
                    <span className="text-primary/80">PDF-Dateien hier ablegen oder klicken, um auszuwählen</span>
                  </div>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="application/pdf"
                    ref={fileInputRef}
                    onChange={handleChange}
                    className="hidden"
                    multiple
                  />
                  {formData.files.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {formData.files.map((file, idx) => (
                        <li key={idx} className="flex items-center justify-between bg-primary/10 rounded px-3 py-2">
                          <span className="text-primary font-medium text-sm truncate max-w-xs">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== idx) }))
                              if (fileInputRef.current) fileInputRef.current.value = ""
                            }}
                            className="ml-2 text-xs text-red-600 hover:underline"
                          >
                            X
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
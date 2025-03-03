"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "./button"

export function ParallaxHero() {
  const [offset, setOffset] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setOffset(window.pageYOffset)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${offset * 0.2}px)`,
          transition: 'transform 0.05s linear'
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glass-cleaning-6858243_1920.jpg-v0ZvWCKzDLc5mZj40rxvrY8lyP2xx8.jpeg"
          alt="Professionelle Fensterreinigung"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl space-y-4 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
              Professionelle Gebäudereinigung für Ihr Unternehmen
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Wir sorgen für Sauberkeit und Hygiene in Ihren Geschäftsräumen. Zuverlässig, gründlich und zu fairen
              Preisen.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-[#00C2FF] hover:bg-[#00A8E0]" onClick={() => (window.location.href = "tel:+4924035192438")}>
                Kostenlos anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


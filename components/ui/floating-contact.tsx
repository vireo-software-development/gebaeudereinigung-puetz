"use client"

import { Phone } from "lucide-react"

import { Button } from "./button"
import { useEffect, useState } from "react"

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])
  return (
    <>
    {isVisible && (
      <Button
        className="fixed bottom-4 left-4 z-50 bg-[#00C2FF] hover:bg-[#00A8E0] shadow-rombo-lg transition-all duration-300 animate-fade-up text-base px-6 py-6"
        onClick={() => (window.location.href = "tel:+4924035192438")}
      >
        <Phone className="mr-3 h-5 w-5" />
        Jetzt anrufen
      </Button>
      )} 
    </>
  )
}

// Hinweis: Die gentleFloat-Animation ist in der tailwind.config.js definiert


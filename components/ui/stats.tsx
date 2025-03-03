"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface StatsProps {
  number: number
  text: string
  duration?: number
}

export function Stats({ number, text, duration = 2000 }: StatsProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    let startTimestamp: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = timestamp - startTimestamp

      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * number), number))
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(number)
      }
    }

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [number, duration, isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <span className="text-4xl font-bold text-[#00C2FF]">{count}+</span>
      <span className="text-sm text-muted-foreground">{text}</span>
    </motion.div>
  )
}


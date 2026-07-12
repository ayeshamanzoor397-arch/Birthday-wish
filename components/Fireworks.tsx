'use client'

import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export default function Fireworks() {

  useEffect(() => {

    const duration = 8000

    const end = Date.now() + duration

    const frame = () => {

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      })

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()

  }, [])

  return null
}
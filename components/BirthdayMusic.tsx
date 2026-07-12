'use client'

import { useEffect } from 'react'

export default function BirthdayMusic() {

  useEffect(() => {

    const audio = new Audio('/music.mp3')

    audio.volume = 0.4
    audio.loop = true

    audio.play().catch(() => {
      console.log('Autoplay blocked')
    })

    return () => {
      audio.pause()
    }

  }, [])

  return null
}
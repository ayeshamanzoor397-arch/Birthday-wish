'use client'

import Confetti from 'react-confetti'
import ShootingStars from '@/components/ShootingStars'
export default function FinalPage() {

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
    <ShootingStars />
      <Confetti />

      <h1 className="text-7xl mb-6">
        🎂
      </h1>

      <h2 className="text-white text-5xl font-bold mb-6">
        Happy 22nd Birthday Sidra
      </h2>

      <p className="text-white text-2xl max-w-2xl">
        May every dream come true 💖
        <br />
        Meri life mn any ka shukria sidra 🌸
      </p>

      <div className="mt-10 text-4xl animate-pulse">
        ❤️❤️❤️
      </div>

    </main>
  )
}
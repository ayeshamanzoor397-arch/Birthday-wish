'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Confetti from 'react-confetti'
import Fireworks from '@/components/Fireworks'
import FloatingHearts from '@/components/FloatingHearts'
import FloatingBalloons from '@/components/FloatingBalloons'

export default function Celebration() {

  const [count, setCount] = useState(3)

  const router = useRouter()

  useEffect(() => {

    if (count <= 0) return

    const timer = setTimeout(() => {
      setCount(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)

  }, [count])

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 flex flex-col justify-center items-center text-center">

      <Confetti />

      <FloatingHearts />
      <FloatingBalloons />
      <Fireworks />

      {count > 0 ? (
        <h1 className="text-9xl font-bold text-white animate-pulse">
          {count}
        </h1>
      ) : (
        <>
          <h1 className="text-7xl font-bold text-white animate-bounce">
            🎉 HAPPY BIRTHDAY 🎉
          </h1>

          <p className="text-white text-2xl mt-6">
            Today is all about YOU 💖
          </p>

          <button
            onClick={() => router.push('/gallery')}
            className="mt-10 bg-white text-purple-600 px-8 py-4 rounded-full font-bold cursor-pointer"
          >
            Open Your Surprise 🎁
          </button>
        </>
      )}

    </main>
  )
}
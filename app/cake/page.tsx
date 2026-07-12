'use client'

import { useRouter } from 'next/navigation'
import confetti from 'canvas-confetti'

export default function CakePage() {

  const router = useRouter()

  const handleWish = () => {

    confetti({
      particleCount: 300,
      spread: 180
    })

    setTimeout(() => {
      router.push('/final')
    }, 3000)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-300 to-purple-500">

      <div
        onClick={handleWish}
        className="text-[180px] cursor-pointer"
      >
        🎂
      </div>

      <h1 className="text-white text-3xl font-bold mt-6">
        Click The Cake And Make A Wish ✨
      </h1>

    </main>
  )
}
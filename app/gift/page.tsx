'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function GiftPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/celebration')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex flex-col items-center justify-center overflow-hidden">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-9xl"
      >
        🎁
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white text-4xl font-bold mt-10"
      >
        Opening Your Surprise...
      </motion.h1>

      <motion.div
        className="absolute text-5xl"
        animate={{
          y: [-100, -700],
          opacity: [1, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
      >
        💖
      </motion.div>

    </main>
  )
}
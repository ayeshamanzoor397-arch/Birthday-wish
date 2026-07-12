'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function NoPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100">

      <motion.div
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="bg-white p-10 rounded-3xl shadow-xl text-center"
      >
        <h1 className="text-4xl mb-4">🥺</h1>

        <h2 className="text-2xl text-black font-bold mb-6">
          Please accept this na...
        </h2>

        <p className="mb-6 text-black">
          I really want to show you something special 💖
        </p>

        <div className="flex gap-4 justify-center">

          <button
            onClick={() => router.push('/celebration')}
            className="bg-pink-500 text-white px-6 py-3 rounded-full cursor-pointer"
          >
            Okay Fine 💕
          </button>

          <button
            onClick={() => router.push('/')}
            className="bg-gray-200 px-6 py-3 text-red-500 rounded-full cursor-pointer"
          >
            Back
          </button>

        </div>
      </motion.div>
    </main>
  )
}
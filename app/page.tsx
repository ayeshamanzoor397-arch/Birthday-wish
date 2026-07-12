'use client'
import GiftBox from '@/components/GiftBox'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 overflow-hidden">

      <div className="absolute inset-0 animate-pulse opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center max-w-xl"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          💖 Hey Beautiful 💖
        </h1>
         <GiftBox />
        <p className="text-white text-xl mb-8">
          There is something very special waiting for you ✨
        </p>

        <div className="flex gap-4 justify-center">

          <button
            onClick={() => router.push('/gift')}
            className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white font-bold"
          >
            Yes 💝
          </button>

          <button
            onClick={() => router.push('/no')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold"
          >
            No 🙈
          </button>

        </div>
      </motion.div>
    </main>
  )
}

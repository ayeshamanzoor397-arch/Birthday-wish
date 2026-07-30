'use client'

import Confetti from 'react-confetti'
import { motion } from 'framer-motion'
import ShootingStars from '@/components/ShootingStars'

export default function FinalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-pink-950 to-black flex flex-col items-center justify-center text-center px-6">

      <ShootingStars />
      <Confetti />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100%",
              x: Math.random() * 1000,
              opacity: 0,
            }}
            animate={{
              y: "-120%",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-3xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-8xl mb-6"
      >
        🎂
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white text-5xl md:text-6xl font-bold mb-6"
      >
        Happy Birthday
        <br />
        Mukarram Ali ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-pink-100 text-xl md:text-2xl leading-9 max-w-3xl"
      >
        Every birthday is special...
        <br />
        But today is even more special because it's the birthday of the person who means the world to me. ❤️
        <br /><br />
        Thank you for every smile, every laugh, every memory, and every moment you've shared with me.
        <br /><br />
        I pray that Allah blesses you with endless happiness, success, good health, and a beautiful future.
        <br /><br />
        No matter where life takes us...
        <br />
        My heart will always pray for your happiness.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-12 text-pink-300 text-4xl font-bold"
      >
        I Love You Forever ❤️
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-4 text-white text-xl"
      >
        Forever & Always 💖
      </motion.p>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="mt-10 text-6xl"
      >
        ❤️
      </motion.div>

      <p className="mt-8 text-pink-200 text-lg">
        — With Love, Ayesha 🌹
      </p>

    </main>
  )
}
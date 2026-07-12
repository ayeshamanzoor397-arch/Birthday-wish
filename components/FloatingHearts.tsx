'use client'

import { motion } from 'framer-motion'

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl"
          initial={{
            y: '100vh',
            x: `${Math.random() * 100}vw`,
            opacity: 0
          }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  )
}
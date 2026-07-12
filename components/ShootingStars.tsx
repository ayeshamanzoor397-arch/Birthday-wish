'use client'

import { motion } from 'framer-motion'

export default function ShootingStars() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white text-xl"
          initial={{
            x: -200,
            y: Math.random() * 500
          }}
          animate={{
            x: 1500,
            y: Math.random() * 500 + 200
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i
          }}
        >
          ✨
        </motion.div>
      ))}
    </>
  )
}
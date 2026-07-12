'use client'

import { motion } from 'framer-motion'

const balloons = ['🎈', '🎈', '🎈', '🎈', '🎈']

export default function FloatingBalloons() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl"
          initial={{
            y: '100vh',
            x: `${15 + index * 20}%`
          }}
          animate={{
            y: '-20vh'
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: index
          }}
        >
          {balloon}
        </motion.div>
      ))}

    </div>
  )
}
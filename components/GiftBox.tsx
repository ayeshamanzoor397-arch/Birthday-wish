'use client'

import { motion } from 'framer-motion'

export default function GiftBox() {
  return (
    <motion.div
      animate={{
        rotate: [0, -10, 10, -10, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 2
      }}
      className="text-8xl"
    >
      🎁
    </motion.div>
  )
}
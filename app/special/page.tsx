"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const reasons = [
  "❤️ Your beautiful smile",
  "🥹 You always make me feel special",
  "🤍 Your caring heart",
  "🌸 The way you understand me",
  "💖 You always support me",
  "✨ Your honesty",
  "😊 Your cute laugh",
  "🌍 You make my world beautiful",
  "🫶 You are my safe place",
  "👑 Because you are Mukarram Ali ❤️",
];

export default function SpecialPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-rose-200 to-purple-300 flex flex-col items-center justify-center px-6 py-12">

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
            className="absolute text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold text-white text-center mb-4"
      >
        10 Reasons Why I Love You ❤️
      </motion.h1>

      <p className="text-white text-center mb-10 text-lg">
        Every reason reminds me how lucky I am to have you, Mukarram Ali. 💖
      </p>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl p-6 shadow-2xl text-white font-semibold text-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/cake")}
        className="mt-12 bg-white text-pink-600 font-bold px-10 py-4 rounded-full shadow-xl text-lg"
      >
        Cut The Birthday Cake 🎂
      </motion.button>
    </main>
  );
}
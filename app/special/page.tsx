"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const qualities = [
  "💖 Caring",
  "✨ Kind",
  "🌸 Beautiful Soul",
  "🦋 Supportive",
  "🎀 Amazing Friend",
  "🤍 Precious Human",
];

export default function SpecialPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10 text-purple-400">Why You're Special</h1>

      <div className="grid grid-cols-2 gap-6">
        {qualities.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              rotateY: 180,
            }}
            className="bg-white p-6 rounded-2xl shadow-xl text-pink-500"
          >
            {item}
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => router.push('/cake')}
        className="mt-10 bg-pink-500 text-white px-8 py-4 rounded-full cursor-pointer"
      >
        Final Surprise 🎂
      </button>
    </main>
  );
}

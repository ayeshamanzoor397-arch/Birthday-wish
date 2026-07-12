"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const memories = [
  {
    image: "/images/image1.png",
    caption: "One of my favourite memories ❤️",
  },
  {
    image: "/images/image2.png",
    caption: "You make ordinary days special ✨",
  },
  {
    image: "/images/image3.png",
    caption: "Thank you for being part of my life 🌸",
  },
  {
    image: "/images/image4.png",
    caption: "Every picture tells a beautiful story 💖",
  },
  {
    image: "/images/image5.png",
    caption: "So many smiles, so many memories 🥰",
  },
  {
    image: "/images/image6.png",
    caption: "Life is brighter with you in it ✨",
  },
  {
    image: "/images/image7.png",
    caption: "A friendship I will always cherish 🌷",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8 text-pink-400">📸 Our Memories</h1>

      <Image
        src={memories[index].image}
        alt=""
        width={400}
        height={500}
        className="w-[350px] h-[450px] object-cover rounded-3xl shadow-xl"
      />

      <p className="mt-4 text-xl font-semibold text-pink-500">
        {memories[index].caption}
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setIndex((index + 1) % memories.length)}
          className="bg-pink-500 text-white px-5 py-3 rounded-full"
        >
          Next ❤️
        </button>
      </div>

      <button
        onClick={() => router.push("/letter")}
        className="mt-10 bg-purple-600 text-white px-8 py-4 rounded-full"
      >
        Read My Letter 💌
      </button>
    </main>
  );
}

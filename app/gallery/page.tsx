"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const memories = [
  {
    image: "/images/img8.jpeg",
    caption: "One of my favourite pic ❤️",
  },
  {
    image: "/images/img3.jpeg",
    caption: "You make ordinary days special ✨",
  },
  {
    image: "/images/img4.jpeg",
    caption: "Thank you for being part of my life 🌸",
  },
  {
    image: "/images/img6.jpeg",
    caption: "Every picture tells a beautiful story 💖",
  },
  {
    image: "/images/img5.jpeg",
    caption: "So many smiles, so many memories 🥰",
  },
  {
    image: "/images/img7.jpeg",
    caption: "Life is brighter with you ✨",
  },
  {
    image: "/images/img2.jpeg",
    caption: "A friendship I will always cherish 🌷",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (index < memories.length - 1) {
      setIndex(index + 1);
    } else {
      router.push("/letter");
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8 text-pink-400">
        📸 Our Memories
      </h1>

      <Image
        src={memories[index].image}
        alt="Memory"
        width={400}
        height={500}
        className="w-[350px] h-[450px] object-cover rounded-3xl shadow-xl"
      />

      <p className="mt-4 text-xl font-semibold text-pink-500">
        {memories[index].caption}
      </p>

      <buttonrun
        onClick={handleNext}
        className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full"
      >
        {index === memories.length - 1
          ? "Read My Letter 💌"
          : "Next ❤️"}
      </buttonrun>
    </main>
  );
}
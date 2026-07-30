'use client'

import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'

export default function LetterPage() {

  const router = useRouter()

 const message = `
💌 Dear Mukarram Ali,

Happy Birthday, My Love. ❤️🎂

Today is all about celebrating the most amazing person in my life—you.

I may not always find the perfect words to express how much you mean to me, but I hope you always know that you are incredibly special to my heart.

Thank you for every smile you've given me, every moment we've shared, and every memory we've created together. You make my world brighter just by being in it.

On your birthday, I pray that Allah fills your life with endless happiness, good health, success, and countless blessings. May every dream you have come true, and may your heart always stay at peace.

No matter what happens, I promise to always stand beside you, support you, and love you with all my heart.

You are not just my favourite person...
You are my home, my comfort, my happiness, and my forever.

Happy Birthday once again, Mukarram Ali. ❤️

I Love You Today,
Tomorrow,
And Every Day After That...

Forever Yours ❤️
`

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-10">

      <h1 className="text-5xl text-center font-bold mb-10">
        💌 Birthday Letter
      </h1>

      <div className="max-w-4xl mx-auto bg-white 
     text-pink-600 p-10 rounded-3xl shadow-xl">

        <TypeAnimation
          sequence={[message]}
          speed={90}
          repeat={0}
          style={{
            whiteSpace: 'pre-line',
            fontSize: '1.3rem'
          }}
        />

      </div>

      <div className="text-center mt-10">

        <button
          onClick={() => router.push('/special')}
          className="bg-pink-500 text-white px-8 py-4 rounded-full cursor-pointer"
        >
          One Last Thing 💖
        </button>

      </div>

    </main>
  )
}
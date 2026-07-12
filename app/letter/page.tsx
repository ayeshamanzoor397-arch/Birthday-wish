'use client'

import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'

export default function LetterPage() {

  const router = useRouter()

  const message = `
💖 Happy Birthday Sidra...

✨ Thank you for being my best friend...

🌸 You know tm sb sy khoobsurat ho...

🦋 Mn chahti hn hm hmesha achy dost rhn...

🎂 Hmara har khawaab such ho...

❤️ Thank you har cheez k liay...

🌷 Tmhary any sy meri life change ho gai...

🎉 Happy Birthday once again...
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
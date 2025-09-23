'use client'
import { useState } from 'react'
import Image from 'next/image'

const products = [
  { name: 'Heron', image: '/heron.png', stats: ['Wingspan: 50ft', 'Range: 1500 miles', 'Payload: 1.6T'] },
  { name: 'Seagull', image: '/seagull.png', stats: ['Wingspan: 13ft', 'Range: 120 miles', 'Payload: 45 lb'] },
]

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)

  const handleSlideChange = (newIndex) => {
    if (newIndex === activeIndex) return
    setPrevIndex(activeIndex)
    setActiveIndex(newIndex)
  }

  return (
    <section id="products" style={{ scrollMarginTop: '160px' }}>
      <h1 className="mb-4 items-center title">Products</h1>
      <div className="bg-black py-24 px-4 mb-24">
        <style jsx global>{`
          @keyframes fadeIn { 0% { opacity: 0 } 100% { opacity: 1 } }
          @keyframes fadeOut { 0% { opacity: 1 } 100% { opacity: 0 } }
          @keyframes expandDown { 0% { height: 0 } 100% { height: 100% } }
          @keyframes glitchEffect {
            0% { opacity: 0 } 30% { opacity: 1 } 35% { opacity: 0 }
            40% { opacity: 1 } 45% { opacity: 0 } 50% { opacity: 1 } 100% { opacity: 1 }
          }
        `}</style>

        {/* Center Mode Carousel */}
        <div className="relative max-w-7xl mx-auto overflow-visible">
          <div className="flex items-center justify-center" style={{ height: 'calc(24rem + 50px)' }}>
            {products.map((product, index) => {
              const position = (index - activeIndex + products.length) % products.length
              let zIndex = 10
              let opacity = '0.5'
              let scale = '1'
              let transform = ''

              if (position === 0) {
                zIndex = 20
                opacity = '1'
                scale = '1.1'
              } else if (position === 1 || position === products.length - 1) {
                zIndex = 15
                opacity = '0.7'
                scale = '0.9'
                transform = index % 2 === 0
                  ? position === 1 ? 'translateX(40%)' : 'translateX(-40%)'
                  : position === 1 ? 'translateX(-40%)' : 'translateX(40%)'
              } else {
                zIndex = 5
                opacity = '0'
                scale = '0.8'
              }

              return (
                <div
                  key={product.name}
                  className="absolute transition-all duration-500 ease-in-out cursor-pointer w-1/2 h-full"
                  style={{ zIndex, opacity, transform: `${transform} scale(${scale})` }}
                  onClick={() => position !== 0 && handleSlideChange(index)}
                >
                  <div className="relative w-full h-full">
                    <Image src={product.image} alt={product.name} fill className="object-contain" sizes="50vw" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats display */}
          <div className="mt-8 text-white max-w-md mx-auto min-h-[140px]">
            <div className="relative">
              <div
                key={`content-${activeIndex}`}
                className="absolute w-full opacity-0"
                style={{ animation: 'glitchEffect 0.8s ease-out forwards' }}
              >
                <h3 className="text-3xl font-bold mb-3">{products[activeIndex].name}</h3>
                <div className="relative">
                  <div
                    className="absolute left-0 w-0.5 bg-white/50"
                    style={{ height: '0%', animation: 'expandDown 0.6s ease-out forwards', animationDelay: '0.1s' }}
                  />
                  <div className="pl-4 space-y-2">
                    {products[activeIndex].stats.map((stat, i) => (
                      <p
                        key={stat}
                        className="text-lg font-semibold opacity-0"
                        style={{ animation: 'fadeIn 0.5s ease-out forwards', animationDelay: `${0.4 + i * 0.15}s` }}
                      >
                        {stat}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {prevIndex !== activeIndex && (
                <div
                  key={`content-${prevIndex}`}
                  className="absolute w-full"
                  style={{ animation: 'fadeOut 0.3s forwards' }}
                >
                  <h3 className="text-3xl font-bold mb-3">{products[prevIndex].name}</h3>
                  <div className="border-l-2 border-white/50 pl-4 space-y-2">
                    {products[prevIndex].stats.map((stat) => (
                      <p key={stat} className="text-lg font-semibold">{stat}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

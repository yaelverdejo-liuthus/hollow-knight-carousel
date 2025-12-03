"use client"

import { useState, useEffect } from "react"

export default function HollowKnightSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 6

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.left = `${e.clientX}px`
      trail.style.top = `${e.clientY}px`

      document.body.appendChild(trail)

      // Remove trail element after animation completes
      setTimeout(() => {
        trail.remove()
      }, 600)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Slide 1 - Title with decorative elements */}
      {currentSlide === 0 && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00293d] via-[#001a2d] to-[#000815] relative overflow-hidden">
          {/* Decorative circles with glow */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-[#0044ff]/20 shadow-[0_0_40px_rgba(0,68,255,0.2)] animate-pulse-slow" />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-[#0041a8]/15 shadow-[0_0_30px_rgba(0,65,168,0.15)] animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/3 right-1/3 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#0044ff]/5 shadow-[0_0_25px_rgba(0,68,255,0.1)] animate-float" />
          <div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#0041a8]/5 shadow-[0_0_20px_rgba(0,65,168,0.1)] animate-float"
            style={{ animationDelay: "2s" }}
          />

          {/* Geometric patterns */}
          <div className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 opacity-10">
            <div className="w-full h-full border border-[#0044ff]/30 rotate-45 shadow-[0_0_15px_rgba(0,68,255,0.2)]" />
          </div>
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-60 md:h-60 opacity-10">
            <div className="w-full h-full border border-[#0041a8]/30 -rotate-45 shadow-[0_0_15px_rgba(0,65,168,0.2)]" />
          </div>

          {/* Horizontal decorative lines */}
          <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-[#0044ff]/30 to-transparent" />
          <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#0044ff]/30 to-transparent" />

          {/* Small floating particles */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 rounded-full bg-[#e2ffdb]/40 shadow-[0_0_8px_rgba(226,255,219,0.6)] animate-float-slow" />
          <div
            className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-[#e2ffdb]/30 shadow-[0_0_8px_rgba(226,255,219,0.4)] animate-float-slow"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#e2ffdb]/35 shadow-[0_0_8px_rgba(226,255,219,0.5)] animate-float-slow"
            style={{ animationDelay: "3s" }}
          />

          {/* Main title container */}
          <div className="relative z-10 text-center px-4">
            {/* Top decorative line */}
            <div className="mb-6 md:mb-8 flex items-center justify-center gap-4">
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-[#0044ff]/50" />
              <div className="w-3 h-3 rotate-45 border border-[#0044ff]/50 shadow-[0_0_10px_rgba(0,68,255,0.4)]" />
              <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-[#0044ff]/50" />
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-[#e2ffdb] uppercase"
              style={{
                textShadow:
                  "0 0 30px rgba(0, 68, 255, 0.7), 0 0 60px rgba(0, 68, 255, 0.5), 0 0 90px rgba(0, 68, 255, 0.3)",
              }}
            >
              HOLLOW KNIGHT
            </h1>

            {/* Bottom decorative line */}
            <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-[#0044ff]/50" />
              <div className="w-3 h-3 rotate-45 border border-[#0044ff]/50 shadow-[0_0_10px_rgba(0,68,255,0.4)]" />
              <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-[#0044ff]/50" />
            </div>

            {/* Subtle accent below */}
            <div className="mt-6 flex justify-center">
              <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-[#0044ff]/40 to-transparent" />
            </div>
          </div>
        </section>
      )}

      {/* Slide 2 - Empty container for images */}
      {currentSlide === 1 && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001a2d] via-[#00293d] to-[#0041a8]/20 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Placeholder containers for images - Add images here later */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-[#00293d]/50 rounded-lg relative
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)] 
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group"
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                {/* Image will be placed here */}
                <span className="text-[#0044ff]/50 text-sm z-10">Image {item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Slide 3 - Empty container for images */}
      {currentSlide === 2 && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00293d] via-[#001528] to-[#000a15] p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Placeholder containers for images - Add images here later */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[3/4] bg-[#00293d]/40 rounded-lg relative
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)] 
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group"
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0041a8]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0041a8]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0041a8]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0041a8]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0041a8]/20 rounded group-hover:border-[#0041a8]/40 transition-colors duration-300" />

                {/* Image will be placed here */}
                <span className="text-[#0041a8]/50 text-sm z-10">Image {item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Slide 4 - Empty container for images */}
      {currentSlide === 3 && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001528] via-[#00293d] to-[#0041a8]/10 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Placeholder containers for images - Add images here later */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-[#00293d]/50 rounded-lg relative
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)] 
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group"
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                {/* Image will be placed here */}
                <span className="text-[#0044ff]/50 text-sm z-10">Image {item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Slide 5 - Empty container for images */}
      {currentSlide === 4 && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00293d] via-[#000a15] to-[#001528] p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Placeholder containers for images - Add images here later */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] bg-[#00293d]/50 rounded-lg relative
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)] 
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group"
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                {/* Image will be placed here */}
                <span className="text-[#0044ff]/50 text-sm z-10">Image {item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Slide 6 - Empty container for images */}
      {currentSlide === 5 && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001528] via-[#00293d] to-[#000815] p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Placeholder containers for images - Add images here later */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[3/4] bg-[#00293d]/50 rounded-lg relative
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)] 
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group"
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                {/* Image will be placed here */}
                <span className="text-[#0044ff]/50 text-sm z-10">Image {item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50
                   w-12 h-12 md:w-14 md:h-14 rounded-full 
                   bg-[#0044ff]/20 border-2 border-[#0044ff]/50
                   flex items-center justify-center
                   hover:bg-[#0044ff]/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,68,255,0.5)]
                   transition-all duration-300 ease-out cursor-pointer
                   text-[#e2ffdb] text-2xl font-bold"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50
                   w-12 h-12 md:w-14 md:h-14 rounded-full 
                   bg-[#0044ff]/20 border-2 border-[#0044ff]/50
                   flex items-center justify-center
                   hover:bg-[#0044ff]/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,68,255,0.5)]
                   transition-all duration-300 ease-out cursor-pointer
                   text-[#e2ffdb] text-2xl font-bold"
      >
        ›
      </button>

      {/* Slide indicator dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#0044ff] w-8 shadow-[0_0_10px_rgba(0,68,255,0.8)]"
                : "bg-[#0041a8]/40 hover:bg-[#0041a8]/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

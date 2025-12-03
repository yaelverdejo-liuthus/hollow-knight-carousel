"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"

const AUDIO_PLAYLIST = [
  {
    title: "The White Lady",
    fileName: "ytmp3free.cc_hollow-knight-ost-the-white-lady-youtubemp3free.org",
  },
  {
    title: "Greenpath",
    fileName: "ytmp3free.cc_hollow-knight-ost-greenpath-youtubemp3free.org",
  },
  {
    title: "Fungal Wastes",
    fileName: "ytmp3free.cc_hollow-knight-ost-fungal-wastes-youtubemp3free.org",
  },
  {
    title: "Dung Defender",
    fileName: "ytmp3free.cc_hollow-knight-ost-dung-defender-youtubemp3free.org",
  },
  {
    title: "City of Tears",
    fileName: "ytmp3free.cc_hollow-knight-ost-city-of-tears-youtubemp3free.org",
  },
  {
    title: "Queen's Gardens",
    fileName: "ytmp3free.cc_hollow-knight-ost-queens-gardens-youtubemp3free.org",
  },
] as const

const SLIDE_TWO_GALLERY = [
  {
    title: "Radiance Statue",
    src: "/radiance-statue.jpg",
    description: "Dormant Radiance effigy shrouded in fog",
    frameClass: "aspect-[3/4]",
    fitClass: "object-cover",
  },
  {
    title: "Wyrm Carcass",
    src: "/wyrm-colossus.jpg",
    description: "Ancient wyrm husk resting in the wastes",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
  {
    title: "Wyrm",
    src: "/wyrm-awakening.jpg",
    description: "A wyrm rising amid a blizzard",
    frameClass: "aspect-[2/3]",
    fitClass: "object-cover",
  },
  {
    title: "Hallownest Map",
    src: "/hallownest-map.jpg",
    description: "Full map of Hallownest",
    frameClass: "aspect-[5/4]",
    fitClass: "object-contain",
    useContainBackground: true,
    labelPosition: "top",
  },
] as const

const SLIDE_THREE_GALLERY = [
  {
    title: "Hollow Knight & Father",
    src: "/hollow-knight-and-father.jpg",
    description: "The Pale King with his vessel",
    frameClass: "aspect-[4/3]",
    fitClass: "object-cover",
  },
  {
    title: "The Pale King",
    src: "/pale-king.jpg",
    description: "Royal silhouette of Hallownest's ruler",
    frameClass: "aspect-[2/3]",
    fitClass: "object-contain object-top",
    useContainBackground: true,
    labelPosition: "top",
  },
  {
    title: "Temple of the Black Egg",
    src: "/black-egg-temple.jpg",
    description: "Sealed temple deep within the caverns",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
] as const

const SLIDE_FOUR_GALLERY = [
  {
    title: "Hornet",
    src: "/hornet.jpg",
    description: "The sentinel of Hallownest",
    frameClass: "aspect-[4/3]",
    fitClass: "object-contain",
    useContainBackground: true,
  },
  {
    title: "White Lady",
    src: "/white-lady.jpg",
    description: "The matriarch shrouded in roots",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
  {
    title: "The Seer",
    src: "/seer.jpg",
    description: "Keeper of the Dream Nails",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
  {
    title: "Three Dreamers",
    src: "/three-dreamers.jpg",
    description: "Monomon, Lurien and Herrah",
    frameClass: "aspect-[4/3]",
    fitClass: "object-cover",
  },
] as const

const SLIDE_FIVE_GALLERY = [
  {
    title: "The Knight",
    src: "/little-knight.jpg",
    description: "The vessel wandering Hallownest",
    frameClass: "aspect-[4/3]",
    fitClass: "object-cover",
  },
  {
    title: "Watcher Knights",
    src: "/little-knight-vs-watchers.jpg",
    description: "Battle against the watcher knights",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
  {
    title: "City of Tears",
    src: "/city-of-tears-scene.jpg",
    description: "Rain-soaked plaza of the city",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
  {
    title: "Colosseum of Fools",
    src: "/colosseum-of-fools.jpg",
    description: "Combat in the colosseum",
    frameClass: "aspect-[4/3]",
    fitClass: "object-cover",
  },
] as const

const SLIDE_SIX_GALLERY = [
  {
    title: "Final Duel",
    src: "/battle-vs-hollow-knight.jpg",
    description: "Confrontation with the Hollow Knight",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
  {
    title: "Absorbing the Infection",
    src: "/knight-absorbing-infection.jpg",
    description: "The knight containing the corruption",
    frameClass: "aspect-[3/4]",
    fitClass: "object-cover",
  },
  {
    title: "Radiance Defeated",
    src: "/radiance-defeated.jpg",
    description: "The Radiance banished with Hornet's aid",
    frameClass: "aspect-[16/9]",
    fitClass: "object-cover",
  },
] as const

type SlideSectionProps = {
  children: ReactNode
  gradientClass?: string
  contentClassName?: string
}

function SlideSection({
  children,
  gradientClass = "bg-gradient-to-br from-[#00293d] via-[#001a2d] to-[#000815]",
  contentClassName = "",
}: SlideSectionProps) {
  return (
    <section className={`min-h-screen relative overflow-hidden flex items-center justify-center ${gradientClass}`}>
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

      <div className={`relative z-10 w-full h-full ${contentClassName}`}>{children}</div>
    </section>
  )
}

export default function HollowKnightSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const totalSlides = 6
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const delayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentTrack = AUDIO_PLAYLIST[currentTrackIndex]

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

  useEffect(() => {
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current)
      delayTimeoutRef.current = null
    }
  }, [currentTrackIndex])

  useEffect(() => {
    const audioElement = audioRef.current
    if (!audioElement) {
      return
    }

    const tryPlay = async () => {
      try {
        audioElement.currentTime = 0
        await audioElement.play()
      } catch (error) {
        console.warn("Autoplay blocked until user interaction", error)
      }
    }

    tryPlay()

    return () => {
      audioElement.pause()
    }
  }, [currentTrackIndex])

  useEffect(() => {
    const audioElement = audioRef.current
    if (!audioElement) {
      return
    }

    const handleEnded = () => {
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current)
      }
      delayTimeoutRef.current = setTimeout(() => {
        setCurrentTrackIndex((prev) => (prev + 1) % AUDIO_PLAYLIST.length)
        delayTimeoutRef.current = null
      }, 5000)
    }

    audioElement.addEventListener("ended", handleEnded)

    return () => {
      audioElement.removeEventListener("ended", handleEnded)
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current)
        delayTimeoutRef.current = null
      }
    }
  }, [])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  useEffect(() => {
    if (hasUserInteracted) {
      return
    }

    const unlockAudio = async () => {
      setHasUserInteracted(true)
      if (!audioRef.current) {
        return
      }
      try {
        await audioRef.current.play()
      } catch (error) {
        console.warn("Unable to start audio even after interaction", error)
      }
    }

    const handlePointer = () => unlockAudio()
    const handleKey = () => unlockAudio()

    window.addEventListener("pointerdown", handlePointer)
    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("pointerdown", handlePointer)
      window.removeEventListener("keydown", handleKey)
    }
  }, [hasUserInteracted])

  return (
    <div className="relative overflow-hidden">
      <audio
        ref={audioRef}
        src={`/${currentTrack.fileName}.mp3`}
        preload="auto"
        autoPlay
        muted={isMuted}
        aria-hidden="true"
        className="hidden"
      />
      <div className="fixed bottom-4 right-4 z-[60] flex w-60 flex-col gap-1 rounded-lg border border-[#0044ff]/40 bg-[#000815]/80 px-3 py-2 text-left text-[#e2ffdb] shadow-[0_0_20px_rgba(0,68,255,0.3)] backdrop-blur-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e2ffdb]/60">
          Playlist
        </p>
        <p className="text-sm font-semibold">{currentTrack.title}</p>
        {!hasUserInteracted && (
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#e2ffdb]/50">
            Haz clic para activar audio
          </p>
        )}
        <button
          type="button"
          onClick={toggleMute}
          aria-pressed={isMuted}
          className="self-start rounded-full border border-[#0044ff]/40 px-3 py-1 text-xs uppercase tracking-widest text-[#e2ffdb]/80 transition hover:border-[#0044ff]/70 hover:text-[#e2ffdb]"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
      {/* Slide 1 - Title with decorative elements */}
      {currentSlide === 0 && (
        <SlideSection contentClassName="px-4">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
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
        </SlideSection>
      )}

      {/* Slide 2 - Lore showcase */}
      {currentSlide === 1 && (
        <SlideSection contentClassName="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {SLIDE_TWO_GALLERY.map((item) => (
              <div
                key={item.title}
                className={`relative ${item.frameClass} bg-[#001a2d]/60 rounded-xl overflow-hidden
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)]
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group`}
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                <img
                  src={item.src}
                  alt={item.description}
                  loading="lazy"
                  className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg ${item.fitClass} ${
                    item.useContainBackground ? "bg-[#f8f9ff]/80 p-4" : ""
                  } brightness-95 contrast-110 transition duration-500 group-hover:scale-105`}
                />

                <div
                  className={`absolute ${item.labelPosition === "top" ? "top-4" : "bottom-4"} left-1/2 -translate-x-1/2 rounded-full border border-[#0044ff]/30 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#e2ffdb] backdrop-blur`}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </SlideSection>
      )}

      {/* Slide 3 - Royal legacy */}
      {currentSlide === 2 && (
        <SlideSection contentClassName="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {SLIDE_THREE_GALLERY.map((item) => (
              <div
                key={item.title}
                className={`relative ${item.frameClass} bg-[#001528]/60 rounded-xl overflow-hidden
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.45)]
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group`}
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0041a8]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0041a8]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0041a8]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0041a8]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0041a8]/20 rounded group-hover:border-[#0041a8]/40 transition-colors duration-300" />

                <img
                  src={item.src}
                  alt={item.description}
                  loading="lazy"
                  className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg ${item.fitClass} ${
                    item.useContainBackground ? "bg-[#f8f9ff]/80 p-4" : ""
                  } brightness-95 contrast-110 transition duration-500 group-hover:scale-105`}
                />

                <div
                  className={`absolute ${item.labelPosition === "top" ? "top-4" : "bottom-4"} left-1/2 -translate-x-1/2 rounded-full border border-[#0041a8]/30 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#e2ffdb] backdrop-blur`}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </SlideSection>
      )}

      {/* Slide 4 - Guardians and dreamers */}
      {currentSlide === 3 && (
        <SlideSection contentClassName="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {SLIDE_FOUR_GALLERY.map((item) => (
              <div
                key={item.title}
                className={`relative ${item.frameClass} bg-[#001a2d]/60 rounded-xl overflow-hidden
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)]
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group`}
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                <img
                  src={item.src}
                  alt={item.description}
                  loading="lazy"
                  className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg ${item.fitClass} ${
                    item.useContainBackground ? "bg-[#f8f9ff]/80 p-4" : ""
                  } brightness-95 contrast-110 transition duration-500 group-hover:scale-105`}
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#0044ff]/30 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#e2ffdb] backdrop-blur">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </SlideSection>
      )}

      {/* Slide 5 - Trials and journeys */}
      {currentSlide === 4 && (
        <SlideSection contentClassName="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {SLIDE_FIVE_GALLERY.map((item) => (
              <div
                key={item.title}
                className={`relative ${item.frameClass} bg-[#001528]/60 rounded-xl overflow-hidden
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)]
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group`}
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                <img
                  src={item.src}
                  alt={item.description}
                  loading="lazy"
                  className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg ${item.fitClass} brightness-95 contrast-110 transition duration-500 group-hover:scale-105`}
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#0044ff]/30 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#e2ffdb] backdrop-blur">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </SlideSection>
      )}

      {/* Slide 6 - Fate of Hallownest */}
      {currentSlide === 5 && (
        <SlideSection contentClassName="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {SLIDE_SIX_GALLERY.map((item) => (
              <div
                key={item.title}
                className={`relative ${item.frameClass} bg-[#001528]/60 rounded-xl overflow-hidden
                          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,68,255,0.5)]
                          transition-all duration-300 ease-out cursor-pointer
                          flex items-center justify-center group`}
              >
                {/* Decorative frame corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0044ff]/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0044ff]/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0044ff]/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0044ff]/60 rounded-br-lg" />

                {/* Inner border glow */}
                <div className="absolute inset-2 border border-[#0044ff]/20 rounded group-hover:border-[#0044ff]/40 transition-colors duration-300" />

                <img
                  src={item.src}
                  alt={item.description}
                  loading="lazy"
                  className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg ${item.fitClass} brightness-95 contrast-110 transition duration-500 group-hover:scale-105`}
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#0044ff]/30 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#e2ffdb] backdrop-blur">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </SlideSection>
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

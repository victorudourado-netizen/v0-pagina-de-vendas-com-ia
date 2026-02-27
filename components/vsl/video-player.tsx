"use client"

import { useEffect, useRef, useCallback } from "react"

interface VideoPlayerProps {
  onTimeUpdate?: (seconds: number) => void
}

export function VideoPlayer({ onTimeUpdate }: VideoPlayerProps) {
  const startTimeRef = useRef<number | null>(null)
  const elapsedBeforePauseRef = useRef(0)
  const animRef = useRef<number | null>(null)
  const isPlayingRef = useRef(false)

  const trackTime = useCallback(() => {
    if (!startTimeRef.current) return
    const now = Date.now()
    const elapsed = elapsedBeforePauseRef.current + (now - startTimeRef.current) / 1000
    onTimeUpdate?.(elapsed)
    animRef.current = requestAnimationFrame(trackTime)
  }, [onTimeUpdate])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data
        if (data.event === "onStateChange") {
          // 1 = playing, 2 = paused, 0 = ended
          if (data.info === 1) {
            if (!isPlayingRef.current) {
              startTimeRef.current = Date.now()
              animRef.current = requestAnimationFrame(trackTime)
              isPlayingRef.current = true
            }
          } else if (data.info === 2 || data.info === 0) {
            if (isPlayingRef.current && startTimeRef.current) {
              elapsedBeforePauseRef.current += (Date.now() - startTimeRef.current) / 1000
              startTimeRef.current = null
            }
            if (animRef.current) cancelAnimationFrame(animRef.current)
            isPlayingRef.current = false
          }
        }
      } catch {
        // ignore non-JSON messages
      }
    }

    window.addEventListener("message", handleMessage)
    return () => {
      window.removeEventListener("message", handleMessage)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [trackTime])

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div
        className="relative w-full rounded-lg overflow-hidden bg-black shadow-xl"
        style={{ aspectRatio: "16/9" }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Sro6nOXiEkE?si=rnOVaG3kfDTj207Z&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1&vq=hd1080&origin=*"
          title="VSL Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  )
}

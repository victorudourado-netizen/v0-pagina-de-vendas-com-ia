"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface VideoPlayerProps {
  onTimeUpdate?: (seconds: number) => void
}

export function VideoPlayer({ onTimeUpdate }: VideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const startTimeRef = useRef<number | null>(null)
  const elapsedBeforePauseRef = useRef(0)
  const animRef = useRef<number | null>(null)
  const estimatedDuration = 35 * 60 // estimated 35 min video

  const trackTime = useCallback(() => {
    if (!startTimeRef.current) return
    const now = Date.now()
    const elapsed = elapsedBeforePauseRef.current + (now - startTimeRef.current) / 1000
    const pct = Math.min((elapsed / estimatedDuration) * 100, 100)
    setProgress(pct)
    onTimeUpdate?.(elapsed)
    animRef.current = requestAnimationFrame(trackTime)
  }, [onTimeUpdate, estimatedDuration])

  const handleOverlayClick = () => {
    const iframe = iframeRef.current
    if (!iframe) return

    if (!isPlaying && !isPaused) {
      // First play
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      )
      setIsPlaying(true)
      startTimeRef.current = Date.now()
      animRef.current = requestAnimationFrame(trackTime)
    } else if (isPlaying && !isPaused) {
      // Pause
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*"
      )
      setIsPaused(true)
      if (startTimeRef.current) {
        elapsedBeforePauseRef.current += (Date.now() - startTimeRef.current) / 1000
      }
      if (animRef.current) cancelAnimationFrame(animRef.current)
    } else if (isPaused) {
      // Resume
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      )
      setIsPaused(false)
      startTimeRef.current = Date.now()
      animRef.current = requestAnimationFrame(trackTime)
    }
  }

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div
        className="relative w-full rounded-t-lg overflow-hidden bg-black"
        style={{ aspectRatio: "16/9" }}
      >
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Sro6nOXiEkE?si=rnOVaG3kfDTj207Z&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1"
          title="VSL Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        />
        {/* Transparent click overlay */}
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="absolute inset-0 z-10 cursor-pointer"
        />
        {/* Play button for initial state */}
        {!isPlaying && !isPaused && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-[#e02020]/90 flex items-center justify-center shadow-2xl shadow-[#e02020]/40">
              <svg className="w-9 h-9 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {/* Pause indicator */}
        {isPaused && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center animate-in fade-in duration-200">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {/* Persuasive progress bar */}
      <div className="w-full h-[5px] bg-[#1a1a1a] rounded-b-lg overflow-hidden relative">
        <div
          className="h-full bg-[#e02020] transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-0 h-full w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-300"
          style={{ left: `calc(${progress}% - 20px)` }}
        />
      </div>
    </div>
  )
}

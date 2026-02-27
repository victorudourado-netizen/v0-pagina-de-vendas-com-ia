"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface VideoPlayerProps {
  videoId: string
  onTimeUpdate?: (seconds: number) => void
}

export function VideoPlayer({ videoId, onTimeUpdate }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YT.Player | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const startTracking = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
        const current = playerRef.current.getCurrentTime()
        const duration = playerRef.current.getDuration()
        if (duration > 0) {
          setProgress((current / duration) * 100)
          onTimeUpdate?.(current)
        }
      }
    }, 500)
  }, [onTimeUpdate])

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.head.appendChild(tag)
    }

    const initPlayer = () => {
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          iv_load_policy: 3,
          disablekb: 1,
          playsinline: 1,
          cc_load_policy: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            setIsReady(true)
          },
          onStateChange: (event: YT.OnStateChangeEvent) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true)
              startTracking()
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false)
              if (intervalRef.current) clearInterval(intervalRef.current)
            } else if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false)
              setProgress(100)
              if (intervalRef.current) clearInterval(intervalRef.current)
            }
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      (window as unknown as Record<string, unknown>).onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (playerRef.current) {
        try {
          playerRef.current.destroy()
        } catch {
          // Player may already be destroyed
        }
      }
    }
  }, [videoId, startTracking])

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return
    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div
        className="relative w-full cursor-pointer rounded-t-lg overflow-hidden"
        style={{ aspectRatio: "16/9" }}
        onClick={togglePlay}
      >
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />
        {/* Play overlay for initial state */}
        {isReady && !isPlaying && progress === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-[#e02020]/90 flex items-center justify-center">
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {/* Pause indicator */}
        {isReady && !isPlaying && progress > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {/* Fake persuasive progress bar */}
      <div className="w-full h-[5px] bg-[#1a1a1a] rounded-b-lg overflow-hidden relative">
        <div
          className="h-full bg-[#e02020] transition-all duration-500 ease-linear"
          style={{ width: `${progress}%` }}
        />
        {/* Glow effect */}
        <div
          className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500"
          style={{ left: `calc(${progress}% - 16px)` }}
        />
      </div>
    </div>
  )
}

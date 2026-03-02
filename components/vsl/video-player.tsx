"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Maximize, Settings } from "lucide-react"

export function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showOverlay, setShowOverlay] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const postCommand = useCallback((func: string, args?: Record<string, unknown>) => {
    if (!iframeRef.current?.contentWindow) return
    const msg: Record<string, unknown> = { event: "command", func }
    if (args) msg.args = args
    iframeRef.current.contentWindow.postMessage(JSON.stringify(msg), "*")
  }, [])

  const handlePlayPause = () => {
    if (isPlaying) {
      postCommand("pauseVideo")
    } else {
      postCommand("playVideo")
    }
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setTimeout(() => setShowOverlay(false), 300)
    }
  }

  // Listen for YouTube state changes
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data
        if (data.event === "onStateChange") {
          if (data.info === 1) {
            setIsPlaying(true)
            setShowOverlay(false)
          }
          if (data.info === 2 || data.info === 0) {
            setIsPlaying(false)
            setShowOverlay(true)
          }
        }
      } catch {
        // ignore
      }
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [])

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        containerRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div
        ref={containerRef}
        className="relative w-full rounded-lg overflow-hidden bg-black shadow-xl group"
        style={{ aspectRatio: "16/9" }}
      >
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Sro6nOXiEkE?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&vq=hd1080&origin=*"
          title="VSL Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />

        {/* Click area for play/pause */}
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handlePlayPause}
        />

        {/* Play button overlay */}
        {showOverlay && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e02020] rounded-full flex items-center justify-center shadow-2xl shadow-black/40">
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-current ml-1" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom controls - quality hint + fullscreen */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-end gap-2 p-2 sm:p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation()
              // Open YouTube settings by sending a click to the settings gear via postMessage
              postCommand("playVideo")
              setIsPlaying(true)
              setShowOverlay(false)
            }}
            className="p-1.5 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Configuracoes de qualidade"
          >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleFullscreen()
            }}
            className="p-1.5 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Tela cheia"
          >
            <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

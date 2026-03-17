"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

interface StickyCTAProps {
  checkoutUrl: string
}

export function StickyCTA({ checkoutUrl }: StickyCTAProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      setShow(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t border-[#e5e5e5] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:hidden">
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all active:scale-[0.98]"
      >
        QUERO COMECAR AGORA <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-[#999999] text-[10px] text-center mt-1.5">
        R$ 47 - Acesso imediato - Garantia 7 dias
      </p>
    </div>
  )
}

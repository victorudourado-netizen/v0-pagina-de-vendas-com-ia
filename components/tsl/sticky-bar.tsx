"use client"

import { useState, useEffect } from "react"
import { Users, Zap, ShieldCheck } from "lucide-react"

export function StickyBar() {
  const [viewers, setViewers] = useState(37)

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((v) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newVal = v + change
        return Math.max(24, Math.min(48, newVal))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sticky top-0 z-40 bg-[#111111] text-white py-2.5 px-3 border-b border-[#333333]">
      <div className="max-w-[680px] mx-auto flex items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
          </span>
          <Users className="w-3 h-3 opacity-70" />
          <span className="opacity-90">{viewers} pessoas vendo agora</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 opacity-90">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>Acesso imediato</span>
        </div>
        <div className="flex items-center gap-1.5 opacity-90">
          <ShieldCheck className="w-3 h-3 text-[#22c55e]" />
          <span>Compra segura</span>
        </div>
      </div>
    </div>
  )
}

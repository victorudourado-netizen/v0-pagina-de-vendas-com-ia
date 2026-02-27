"use client"

import { Loader2 } from "lucide-react"

interface WaitingMessageProps {
  visible: boolean
}

export function WaitingMessage({ visible }: WaitingMessageProps) {
  if (!visible) return null

  return (
    <div className="flex items-center justify-center gap-3 py-4 animate-pulse">
      <Loader2 className="w-5 h-5 text-[#fbbf24] animate-spin" />
      <p className="text-[#fbbf24] text-base font-medium">
        Aguarde, sua vaga esta sendo processada pelo sistema...
      </p>
    </div>
  )
}

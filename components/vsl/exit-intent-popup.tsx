"use client"

import { useEffect, useState, useCallback } from "react"
import { X, ShieldCheck } from "lucide-react"

interface ExitIntentPopupProps {
  discountCheckoutUrl: string
}

export function ExitIntentPopup({ discountCheckoutUrl }: ExitIntentPopupProps) {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const handleExitIntent = useCallback(() => {
    if (dismissed) return
    setShow(true)
  }, [dismissed])

  useEffect(() => {
    // Desktop: mouse leaves viewport from the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        handleExitIntent()
      }
    }

    // Mobile: back button / history state
    const handlePopState = () => {
      if (!dismissed) {
        handleExitIntent()
        // Push state again so they stay on page
        window.history.pushState(null, "", window.location.href)
      }
    }

    // Push an initial state so popstate can fire
    window.history.pushState(null, "", window.location.href)

    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("popstate", handlePopState)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("popstate", handlePopState)
    }
  }, [handleExitIntent, dismissed])

  const handleDismiss = () => {
    setShow(false)
    setDismissed(true)
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleDismiss}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-[440px] p-5 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-[#999999] hover:text-[#333333] transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <p className="text-[#e02020] text-xs sm:text-sm font-bold uppercase tracking-wider">
            Espera! Ultima chance
          </p>

          <h3 className="text-[#111111] font-serif uppercase text-xl sm:text-2xl font-bold mt-3 leading-tight tracking-tight">
            Nada acontece por acaso.
          </h3>

          <p className="text-[#666666] text-sm sm:text-base mt-3 leading-relaxed">
            Nem uma folha cai de uma arvore sem que Deus permita. Se voce chegou ate aqui,
            talvez essa seja a porta que Ele esta abrindo pra voce. Nao ignore mais uma
            oportunidade que foi colocada no seu caminho. Pra te ajudar a dar esse passo,
            liberamos um{" "}
            <span className="text-[#111111] font-bold">desconto especial</span>:
          </p>

          {/* Price */}
          <div className="mt-5 mb-5">
            <p className="text-[#999999] text-sm line-through">De R$ 47</p>
            <p className="text-[#e02020] font-serif uppercase text-4xl sm:text-5xl font-bold mt-1">
              R$ 27
            </p>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">
              Desconto aplicado automaticamente
            </p>
          </div>

          {/* CTA */}
          <a
            href={discountCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full"
          >
            <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300 animate-pulse" />
            <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
              <span className="block font-serif uppercase tracking-wide">
                Quero Por Apenas R$ 27
              </span>
              <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80">
                Acesso imediato + Garantia de 7 dias
              </span>
            </div>
          </a>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[#22c55e]">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">Garantia de 7 dias - Risco zero</span>
          </div>

          {/* Dismiss link */}
          <button
            onClick={handleDismiss}
            className="mt-4 text-[#999999] text-xs hover:text-[#666666] underline cursor-pointer"
          >
            Nao, prefiro continuar como estou.
          </button>
        </div>
      </div>
    </div>
  )
}

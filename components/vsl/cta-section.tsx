"use client"

import { ShieldCheck, Lock } from "lucide-react"

interface CTASectionProps {
  visible: boolean
  checkoutUrl: string
}

export function CTASection({ visible, checkoutUrl }: CTASectionProps) {
  if (!visible) return null

  return (
    <div className="w-full max-w-[800px] mx-auto px-3 sm:px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Main CTA */}
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-[480px] block"
        >
          <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300" />
          <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 sm:px-8 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
            <span className="block font-serif uppercase tracking-wide">Quero Receber As Gravacoes Agora</span>
            <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80">
              Por apenas R$ 47 + Garantia de 7 dias
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 text-[#999999] text-xs">
          <Lock className="w-3.5 h-3.5" />
          <span>Compra segura - Ambiente protegido Kiwify</span>
        </div>
      </div>

      {/* Guarantee */}
      <div className="mt-8 sm:mt-10 border border-[#e5e5e5] rounded-xl p-4 sm:p-6 bg-[#f9fafb]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#22c55e]" />
          </div>
          <div>
            <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-2">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
              Teste por 7 dias. Se achar que nao e pra voce, devolvo cada centavo.
              Sem perguntas, sem burocracia. A unica pessoa que pode sair no prejuizo sou eu.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

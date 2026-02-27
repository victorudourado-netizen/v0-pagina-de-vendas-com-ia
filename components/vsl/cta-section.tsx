"use client"

import { ShieldCheck, Lock } from "lucide-react"

interface CTASectionProps {
  visible: boolean
  checkoutUrl: string
}

export function CTASection({ visible, checkoutUrl }: CTASectionProps) {
  if (!visible) return null

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Main CTA */}
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide mb-1">
            Vagas Abertas
          </p>
          <p className="text-white text-lg font-bold">
            Garanta sua vaga agora com acesso imediato
          </p>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-[480px] block"
        >
          <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300" />
          <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-lg py-5 px-8 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
            <span className="block">QUERO COMECAR AGORA</span>
            <span className="block text-sm font-normal mt-1 text-white/80">
              Acesso imediato a todo o metodo
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 text-[#666666] text-xs">
          <Lock className="w-3.5 h-3.5" />
          <span>Compra segura - Ambiente protegido Kiwify</span>
        </div>
      </div>

      {/* Guarantee */}
      <div className="mt-10 border border-[#222222] rounded-xl p-6 bg-[#0a0a0a]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7 text-[#22c55e]" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Se em 7 dias voce achar que o metodo nao e pra voce, basta
              solicitar o reembolso e devolvemos 100% do seu dinheiro. Sem
              perguntas, sem burocracia. O risco e todo nosso. Voce nao tem
              absolutamente nada a perder.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

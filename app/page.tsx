"use client"

import { useState, useCallback } from "react"
import { VideoPlayer } from "@/components/vsl/video-player"
import { LiveCounter } from "@/components/vsl/live-counter"

import { CTASection } from "@/components/vsl/cta-section"
import { Testimonials } from "@/components/vsl/testimonials"
import { FAQSection } from "@/components/vsl/faq-section"
import { PurchaseNotifications } from "@/components/vsl/purchase-notifications"

const CHECKOUT_URL = "https://pay.kiwify.com.br/YvHHAGd"
const CTA_REVEAL_SECONDS = 300 // 5 minutes
const NOTIFICATION_REVEAL_SECONDS = 360 // 6 minutes

export default function VSLPage() {
  const [showCTA, setShowCTA] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const handleTimeUpdate = useCallback((seconds: number) => {
    if (seconds >= CTA_REVEAL_SECONDS) {
      setShowCTA(true)
    }
    if (seconds >= NOTIFICATION_REVEAL_SECONDS) {
      setShowNotifications(true)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black selection:bg-[#e02020]/30">
      {/* Purchase notifications */}
      <PurchaseNotifications active={showNotifications} />

      {/* Top bar */}
      <div className="pt-4 sm:pt-6 pb-2 sm:pb-3 px-3 sm:px-4">
        <LiveCounter />
      </div>

      {/* Headline */}
      <div className="px-3 sm:px-4 pb-4 sm:pb-6 max-w-[800px] mx-auto text-center">
        <p className="text-[#e02020] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 font-sans">
          Aviso: Este video pode ser removido a qualquer momento
        </p>
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance font-serif uppercase tracking-tight">
          A Igreja Nao Quer Que Voce Saiba Que Da Pra{" "}
          <span className="text-[#e02020]">Ganhar Dinheiro</span>{" "}
          Espalhando a Palavra de Deus Pelo Celular
        </h1>
        <p className="text-[#888888] text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed max-w-[640px] mx-auto text-pretty font-sans">
          Um motorista de aplicativo descobriu uma brecha que grandes pastores e politicos{" "}
          <span className="text-[#cccccc] font-medium">preferem que voce nunca descubra.</span>{" "}
          Assista ate o final antes que removam este conteudo.
        </p>
      </div>

      {/* Video Player */}
      <div className="px-2 sm:px-4">
        <VideoPlayer onTimeUpdate={handleTimeUpdate} />
      </div>

      {/* CTA */}
      <div className="py-8 px-4">
        <CTASection visible={showCTA} checkoutUrl={CHECKOUT_URL} />
      </div>

      {/* Testimonials */}
      <div className="py-6">
        <Testimonials />
      </div>

      {/* Second CTA (only after reveal) */}
      {showCTA && (
        <div className="py-6 sm:py-8 px-3 sm:px-4">
          <div className="w-full max-w-[800px] mx-auto flex flex-col items-center gap-3">
            <p className="text-[#e02020] font-serif uppercase text-base sm:text-lg md:text-xl font-bold tracking-tight text-center">
              Nao perca essa oportunidade
            </p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[480px] block"
            >
              <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300 animate-pulse" />
              <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 sm:px-8 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
                <span className="block font-serif uppercase tracking-wide">Quero Garantir Minha Vaga Agora</span>
                <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80 font-sans">
                  Acesso imediato + Garantia de 7 dias
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* FAQ */}
      {showCTA && (
        <div className="py-8">
          <FAQSection />
        </div>
      )}

      {/* Footer - disclaimer only shows after 5 min */}
      <footer className="py-8 px-4 border-t border-[#111111]">
        <div className="max-w-[800px] mx-auto text-center">
          {showCTA && (
            <p className="text-[#444444] text-xs leading-relaxed font-sans mb-3">
              Este produto e vendido atraves da Kiwify. A plataforma de pagamento oferece
              garantia de 7 dias para reembolso. Ao adquirir, voce concorda com os termos de uso
              e politica de privacidade da plataforma. Este site nao e afiliado ao Facebook,
              Google, YouTube ou qualquer outra plataforma mencionada.
            </p>
          )}
          <p className="text-[#333333] text-xs font-sans">
            Metodo Cortes Abençoados - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}

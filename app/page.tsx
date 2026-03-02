"use client"

import { useState, useEffect } from "react"
import { VideoPlayer } from "@/components/vsl/video-player"
import { LiveCounter } from "@/components/vsl/live-counter"
import { CTASection } from "@/components/vsl/cta-section"
import { Testimonials } from "@/components/vsl/testimonials"
import { FAQSection } from "@/components/vsl/faq-section"
import { PurchaseNotifications } from "@/components/vsl/purchase-notifications"
import { SalesText } from "@/components/vsl/sales-text"
import { ExitIntentPopup } from "@/components/vsl/exit-intent-popup"

const CHECKOUT_URL = "https://pay.kiwify.com.br/OkSyoY0"
const DISCOUNT_CHECKOUT_URL = "https://pay.kiwify.com.br/YvHHAGd"
const PAGE_TIMER_CTA = 240_000
const PAGE_TIMER_NOTIFICATIONS = 25_000

export default function VSLPage() {
  const [showCTA, setShowCTA] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const ctaTimer = setTimeout(() => setShowCTA(true), PAGE_TIMER_CTA)
    const notifTimer = setTimeout(() => setShowNotifications(true), PAGE_TIMER_NOTIFICATIONS)
    return () => {
      clearTimeout(ctaTimer)
      clearTimeout(notifTimer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white selection:bg-[#e02020]/20">
      <PurchaseNotifications active={showNotifications} />
      <ExitIntentPopup discountCheckoutUrl={DISCOUNT_CHECKOUT_URL} />

      {/* Top bar */}
      <div className="pt-4 sm:pt-6 pb-2 sm:pb-3 px-3 sm:px-4">
        <LiveCounter />
      </div>

      {/* Headline */}
      <div className="px-3 sm:px-4 pb-4 sm:pb-6 max-w-[800px] mx-auto text-center">
        <h1 className="text-[#111111] text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance font-serif uppercase tracking-tight">
          Descubra Como Pessoas Comuns Estao Fazendo{" "}
          <span className="text-[#e02020]">R$ 100 a R$ 300 Por Dia</span>{" "}
          Postando Cortes De Videos Pelo Celular
        </h1>
        <p className="text-[#666666] text-sm sm:text-base md:text-lg mt-3 sm:mt-5 leading-relaxed max-w-[640px] mx-auto text-pretty font-sans">
          Assista esse video de 3 minutos e veja o passo a passo completo para{" "}
          <span className="text-[#222222] font-semibold">comecar a ganhar dinheiro ainda hoje</span>{" "}
          -- sem aparecer, sem investir nada e usando apenas o seu celular.
        </p>
      </div>

      {/* Video */}
      <div className="px-2 sm:px-4">
        <VideoPlayer />
      </div>

      {/* Sales Text (TSL) */}
      <div className="py-8 sm:py-12 px-3 sm:px-4">
        <SalesText showCTA={showCTA} checkoutUrl={CHECKOUT_URL} />
      </div>

      {/* CTA */}
      <div className="py-6 px-3 sm:px-4">
        <CTASection visible={showCTA} checkoutUrl={CHECKOUT_URL} />
      </div>

      {/* Testimonials */}
      <div className="py-6">
        <Testimonials />
      </div>

      {/* Second CTA */}
      {showCTA && (
        <div className="py-6 sm:py-8 px-3 sm:px-4">
          <div className="w-full max-w-[800px] mx-auto flex flex-col items-center gap-3">
            <p className="text-[#e02020] font-serif uppercase text-base sm:text-lg md:text-xl font-bold tracking-tight text-center">
              Essa oportunidade nao vai esperar por voce
            </p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[480px] block"
            >
              <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300 animate-pulse" />
              <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 sm:px-8 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
                <span className="block font-serif uppercase tracking-wide">Quero Comecar A Ganhar Dinheiro Hoje</span>
                <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80 font-sans">
                  Por apenas R$ 47 + Garantia de 7 dias
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#e5e5e5]">
        <div className="max-w-[800px] mx-auto text-center">
          {showCTA && (
            <p className="text-[#999999] text-xs leading-relaxed font-sans mb-3">
              Este produto e vendido atraves da Kiwify. A plataforma de pagamento oferece
              garantia de 7 dias para reembolso. Ao adquirir, voce concorda com os termos de uso
              e politica de privacidade da plataforma. Este site nao e afiliado ao Facebook,
              Google, YouTube ou qualquer outra plataforma mencionada.
            </p>
          )}
          <p className="text-[#aaaaaa] text-xs font-sans">
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}

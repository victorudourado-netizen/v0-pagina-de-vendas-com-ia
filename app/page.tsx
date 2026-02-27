"use client"

import { useState, useCallback } from "react"
import { VideoPlayer } from "@/components/vsl/video-player"
import { LiveCounter } from "@/components/vsl/live-counter"
import { WaitingMessage } from "@/components/vsl/waiting-message"
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
    if (seconds >= CTA_REVEAL_SECONDS && !showCTA) {
      setShowCTA(true)
    }
    if (seconds >= NOTIFICATION_REVEAL_SECONDS && !showNotifications) {
      setShowNotifications(true)
    }
  }, [showCTA, showNotifications])

  return (
    <main className="min-h-screen bg-black">
      {/* Purchase notifications */}
      <PurchaseNotifications active={showNotifications} />

      {/* Top spacer */}
      <div className="pt-6 pb-4 px-4">
        <LiveCounter />
      </div>

      {/* Headline */}
      <div className="px-4 pb-6 max-w-[800px] mx-auto text-center">
        <h1 className="text-white text-xl md:text-2xl font-bold leading-tight text-balance">
          Motorista de App Revela o Metodo Que Usa Para Ganhar Dinheiro Extra Apenas Cortando e Postando Videos
        </h1>
        <p className="text-[#999999] text-sm md:text-base mt-3 leading-relaxed max-w-[600px] mx-auto text-pretty">
          Sem aparecer, sem gravar nada, sem gastar com anuncios. Apenas usando videos que ja existem na internet.
        </p>
      </div>

      {/* Video Player */}
      <div className="px-4">
        <VideoPlayer
          videoId="Sro6nOXiEkE"
          onTimeUpdate={handleTimeUpdate}
        />
      </div>

      {/* CTA or Waiting Message */}
      <div className="py-8 px-4">
        <WaitingMessage visible={!showCTA} />
        <CTASection visible={showCTA} checkoutUrl={CHECKOUT_URL} />
      </div>

      {/* Testimonials */}
      <div className="py-6">
        <Testimonials />
      </div>

      {/* Second CTA (only after reveal) */}
      {showCTA && (
        <div className="py-8 px-4">
          <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[480px] block"
            >
              <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300" />
              <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-lg py-5 px-8 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
                <span className="block">QUERO GARANTIR MINHA VAGA</span>
                <span className="block text-sm font-normal mt-1 text-white/80">
                  Com garantia de 7 dias ou seu dinheiro de volta
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
      <footer className="py-8 px-4 border-t border-[#111111]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#444444] text-xs leading-relaxed">
            Este produto e vendido atraves da Kiwify. A plataforma de pagamento oferece
            garantia de 7 dias para reembolso. Ao adquirir, voce concorda com os termos de uso
            e politica de privacidade da plataforma.
          </p>
          <p className="text-[#333333] text-xs mt-3">
            Metodo Cortes Abençoados - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}

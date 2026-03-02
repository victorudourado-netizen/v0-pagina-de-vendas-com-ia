"use client"

import { useState, useEffect } from "react"
import { LiveCounter } from "@/components/vsl/live-counter"
import { PurchaseNotifications } from "@/components/vsl/purchase-notifications"
import { ExitIntentPopup } from "@/components/vsl/exit-intent-popup"
import { ProofCarousel } from "@/components/vsl/proof-carousel"
import { Testimonials } from "@/components/vsl/testimonials"
import { FAQSection } from "@/components/vsl/faq-section"
import {
  CheckCircle,
  ShieldCheck,
  Lock,
  Smartphone,
  DollarSign,
  Eye,
  Clock,
  Zap,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  ChevronRight,
} from "lucide-react"

const CHECKOUT_URL = "https://pay.kiwify.com.br/OkSyoY0"
const DISCOUNT_CHECKOUT_URL = "https://pay.kiwify.com.br/YvHHAGd"

function CTAButton({ label, sub, url }: { label: string; sub: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full max-w-[480px] block mx-auto"
    >
      <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-2xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300" />
      <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
        <span className="flex items-center justify-center gap-2 font-serif uppercase tracking-wide">
          {label} <ArrowRight className="w-5 h-5" />
        </span>
        <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80 font-sans">
          {sub}
        </span>
      </div>
    </a>
  )
}

export default function TSLPage() {
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowNotifications(true), 25_000)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen bg-white selection:bg-[#e02020]/10">
      <PurchaseNotifications active={showNotifications} />
      <ExitIntentPopup discountCheckoutUrl={DISCOUNT_CHECKOUT_URL} />

      {/* ====== ABOVE THE FOLD ====== */}
      <section className="pt-4 sm:pt-6 pb-8 sm:pb-12 px-4 max-w-[680px] mx-auto">
        <LiveCounter />

        {/* HEADLINE */}
        <h1 className="text-[#111111] text-[28px] sm:text-4xl md:text-[44px] font-bold leading-[1.1] text-balance font-serif uppercase tracking-tight text-center mt-5 sm:mt-7">
          Como Pessoas Comuns Estao Ganhando{" "}
          <span className="text-[#e02020]">De R$ 100 a R$ 300 Por Dia</span>{" "}
          Postando Cortes De Videos Pelo Celular
        </h1>

        <p className="text-[#555555] text-sm sm:text-[17px] mt-4 sm:mt-6 leading-relaxed text-center text-pretty max-w-[580px] mx-auto">
          Sem aparecer, sem investir nada, sem precisar de computador.{" "}
          <span className="text-[#111111] font-semibold">
            Tudo o que voce precisa e um celular com internet.
          </span>
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-7">
          {[
            { icon: Smartphone, text: "So precisa do celular" },
            { icon: Eye, text: "Sem aparecer" },
            { icon: DollarSign, text: "R$ 0 de investimento" },
            { icon: Clock, text: "Menos de 1h/dia" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[#444444]">
              <Icon className="w-4 h-4 text-[#22c55e]" />
              <span className="text-xs sm:text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ====== HOW IT WORKS (simple & fast) ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5 sm:p-7">
          <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight mb-5 text-center">
            3 Passos. So Isso.
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Baixe um video que ja existe",
                desc: "Um corte de pregacao, podcast, futebol, pegadinha -- qualquer video que ja viralizou. A I.A. baixa e edita pra voce em segundos, adaptando pro formato do Reels, TikTok e Shorts.",
              },
              {
                step: "2",
                title: "Poste na sua pagina",
                desc: "Coloque uma legenda estrategica que direciona as pessoas pros seus stories. Nao precisa mostrar seu rosto. A pagina pode ser totalmente anonima.",
              },
              {
                step: "3",
                title: "Ganhe comissao",
                desc: "Nos stories, voce coloca o link de um produto de afiliado. Cada pessoa que comprar pelo seu link, voce recebe uma comissao direto no Pix. Simples assim.",
              },
            ].map(({ step, title, desc }, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111111] text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div className="pt-1">
                  <h3 className="text-[#111111] font-bold text-sm sm:text-base">{title}</h3>
                  <p className="text-[#555555] text-xs sm:text-sm leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#555555] text-sm sm:text-base text-center mt-6 leading-relaxed">
          Isso se chama <span className="text-[#111111] font-bold">marketing de afiliacao</span>{" "}
          -- o mesmo modelo que Avon e Natura usaram no Brasil nos anos 90. Grandes sites que
          vendem online pagam comissoes pra pessoas comuns divulgarem seus produtos.{" "}
          <span className="text-[#111111] font-semibold">Isso existe ha mais de 20 anos e e 100% legal.</span>
        </p>
      </section>

      {/* ====== PROOF ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto">
        <ProofCarousel />
      </section>

      {/* ====== FIRST CTA ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto">
        <CTAButton
          label="Quero Aprender Agora"
          sub="Por apenas R$ 47 -- Acesso imediato"
          url={CHECKOUT_URL}
        />
        <div className="flex items-center justify-center gap-2 mt-3 text-[#999999] text-xs">
          <Lock className="w-3.5 h-3.5" />
          <span>Compra 100% segura via Kiwify</span>
        </div>
      </section>

      {/* ====== EMOTIONAL BRIDGE ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto">
        <div className="space-y-5 text-[#333333] text-sm sm:text-base leading-relaxed">
          <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight text-center">
            Voce Nao Precisa Continuar No Mesmo Lugar
          </h2>
          <p>
            Talvez voce esteja cansado de promessas. Talvez ja tenha tentado outras coisas
            na internet e nao deu certo. Talvez as contas estejam apertadas e voce precise
            de algo que{" "}
            <span className="text-[#111111] font-semibold">funcione de verdade, sem enrolacao.</span>
          </p>
          <p>
            Esse metodo nao e magica. Nao e esquema. E um trabalho simples que qualquer
            pessoa com um celular consegue fazer. Voce nao precisa ter experiencia, nao
            precisa saber de tecnologia, nao precisa investir nenhum centavo.
          </p>
          <p>
            So precisa estar disposto a dedicar{" "}
            <span className="text-[#111111] font-semibold">menos de 1 hora por dia</span>{" "}
            pra aprender, aplicar e comecar a ver os primeiros resultados. Quem segue o
            passo a passo tem visto retorno entre a primeira e a terceira semana.
          </p>
          <p className="text-[#111111] font-semibold text-base sm:text-lg text-center pt-2">
            E o melhor: enquanto voce ganha, voce leva a Palavra de Deus a milhares de
            pessoas que talvez nunca pisariam numa igreja.
          </p>
        </div>
      </section>

      {/* ====== WHAT YOU GET ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto">
        <div className="border-2 border-[#111111] rounded-2xl bg-white p-5 sm:p-7">
          <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight text-center mb-1">
            Tudo Que Voce Vai Receber
          </h2>
          <p className="text-[#888888] text-xs sm:text-sm text-center mb-6">
            Acesso imediato e vitalicio a todas as gravacoes
          </p>

          <div className="space-y-3.5">
            {[
              { icon: CheckCircle, text: "Metodo completo: como achar, baixar, editar com I.A. e postar em todas as plataformas" },
              { icon: CheckCircle, text: "Quais sites usar pra se afiliar e vender sem gastar nada" },
              { icon: CheckCircle, text: "Legendas, hashtags e estrategias pra atingir as pessoas certas" },
              { icon: TrendingUp, text: "Estrategia de Video Review: reviews no YouTube que vendem no automatico" },
              { icon: MessageCircle, text: "Como trazer clientes direto pro WhatsApp e fechar vendas" },
              { icon: Zap, text: "Introducao ao Trafego Pago: pra quando quiser escalar de vez" },
              { icon: CheckCircle, text: "Acesso vitalicio -- assista no seu ritmo, volte sempre que precisar" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span className="text-[#222222] text-sm sm:text-[15px]">{text}</span>
              </div>
            ))}
          </div>

          {/* Price anchor */}
          <div className="mt-7 pt-6 border-t border-[#e5e5e5] text-center">
            <p className="text-[#999999] text-sm line-through">De R$ 197</p>
            <p className="text-[#111111] font-serif uppercase text-4xl sm:text-5xl font-bold mt-1">
              R$ 47
            </p>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">
              Pagamento unico. Sem mensalidade. Sem taxa escondida.
            </p>
          </div>

          <div className="mt-5">
            <CTAButton
              label="Quero Comecar Agora"
              sub="Acesso imediato + Garantia de 7 dias"
              url={CHECKOUT_URL}
            />
          </div>
        </div>
      </section>

      {/* ====== GUARANTEE ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-5 sm:p-7 text-center">
          <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#22c55e] mx-auto" />
          <h3 className="text-[#111111] font-bold text-lg sm:text-xl mt-3 mb-2">
            Garantia Total de 7 Dias
          </h3>
          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-[480px] mx-auto">
            Teste tudo por 7 dias. Se voce achar que nao e pra voce por{" "}
            <span className="font-semibold text-[#111111]">qualquer motivo</span>,
            basta pedir o reembolso e cada centavo sera devolvido. Sem perguntas.{" "}
            <span className="font-semibold text-[#111111]">O risco e todo nosso.</span>
          </p>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="pb-8 sm:pb-12">
        <Testimonials />
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="px-4 pb-8 sm:pb-12 max-w-[680px] mx-auto text-center">
        <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight mb-2">
          A Decisao E Sua
        </h2>
        <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto mb-6">
          Voce pode fechar essa pagina e continuar como esta. Ou pode investir{" "}
          <span className="text-[#111111] font-bold">R$ 47</span> -- menos que um lanche
          no shopping -- e descobrir um caminho real pra comecar a ganhar dinheiro com o celular
          que ja esta na sua mao.
        </p>
        <CTAButton
          label="Quero Minha Vaga Agora"
          sub="Por apenas R$ 47 -- Risco zero"
          url={CHECKOUT_URL}
        />
        <div className="flex items-center justify-center gap-2 mt-3 text-[#999999] text-xs">
          <Lock className="w-3.5 h-3.5" />
          <span>Pagamento seguro via Kiwify -- Garantia de 7 dias</span>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="pb-8 sm:pb-12">
        <FAQSection />
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="py-8 px-4 border-t border-[#e5e5e5]">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[#999999] text-[11px] leading-relaxed font-sans">
            Este produto e vendido atraves da Kiwify. A plataforma de pagamento oferece
            garantia de 7 dias para reembolso. Ao adquirir, voce concorda com os termos de uso
            e politica de privacidade da plataforma. Este site nao e afiliado ao Facebook,
            Google, YouTube ou qualquer outra plataforma mencionada.
          </p>
        </div>
      </footer>
    </main>
  )
}

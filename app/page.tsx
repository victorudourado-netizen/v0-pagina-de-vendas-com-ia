"use client"

import { useState, useEffect } from "react"
import { StickyBar } from "@/components/tsl/sticky-bar"
import { StickyCTA } from "@/components/tsl/sticky-cta"
import { ObjectionSection } from "@/components/tsl/objection-section"
import { ProofCarousel } from "@/components/vsl/proof-carousel"
import { Testimonials } from "@/components/vsl/testimonials"
import { FAQSection } from "@/components/vsl/faq-section"
import { PurchaseNotifications } from "@/components/vsl/purchase-notifications"
import { ExitIntentPopup } from "@/components/vsl/exit-intent-popup"
import {
  CheckCircle,
  ShieldCheck,
  Lock,
  Smartphone,
  DollarSign,
  UserX,
  Clock,
  Zap,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Play,
  Heart,
  Target,
} from "lucide-react"

const CHECKOUT_URL = "https://pay.kiwify.com.br/OkSyoY0"
const DISCOUNT_CHECKOUT_URL = "https://pay.kiwify.com.br/YvHHAGd"

function CTAButton({
  label,
  sub,
  url,
  variant = "primary",
}: {
  label: string
  sub: string
  url: string
  variant?: "primary" | "secondary"
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full max-w-[480px] block mx-auto"
    >
      {variant === "primary" && (
        <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-2xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300" />
      )}
      <div
        className={`relative font-bold text-base sm:text-lg py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
          variant === "primary"
            ? "bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-lg shadow-[#22c55e]/25"
            : "bg-[#111111] hover:bg-[#222222] text-white"
        }`}
      >
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

function TrustBadge({ icon: Icon, text }: { icon: typeof Smartphone; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-full px-3 py-1.5">
      <Icon className="w-4 h-4 text-[#22c55e]" />
      <span className="text-[#333333] text-xs sm:text-sm font-medium">{text}</span>
    </div>
  )
}

export default function TSLPage() {
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowNotifications(true), 25_000)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen bg-white selection:bg-[#22c55e]/10 pb-20 sm:pb-0">
      <StickyBar />
      <StickyCTA checkoutUrl={CHECKOUT_URL} />
      <PurchaseNotifications active={showNotifications} />
      <ExitIntentPopup discountCheckoutUrl={DISCOUNT_CHECKOUT_URL} />

      {/* ===== HERO ===== */}
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 px-4 max-w-[680px] mx-auto">
        {/* Pre-headline */}
        <p className="text-[#e02020] text-xs sm:text-sm font-bold uppercase tracking-wide text-center mb-4">
          Metodo simples de renda extra pelo celular
        </p>

        {/* Headline */}
        <h1 className="text-[#111111] text-[26px] sm:text-4xl md:text-[42px] font-bold leading-[1.12] text-balance font-serif uppercase tracking-tight text-center">
          Descubra Como Ganhar{" "}
          <span className="text-[#e02020]">De R$ 100 a R$ 300 Por Dia</span>{" "}
          Postando Videos Curtos Pelo Celular
        </h1>

        {/* Subheadline */}
        <p className="text-[#555555] text-sm sm:text-[17px] mt-5 sm:mt-6 leading-relaxed text-center text-pretty max-w-[560px] mx-auto">
          Sem aparecer, sem gravar nada, sem precisar de computador e sem investir um centavo.{" "}
          <span className="text-[#111111] font-semibold">
            Tudo o que voce precisa e um celular com internet.
          </span>
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <TrustBadge icon={Smartphone} text="So precisa do celular" />
          <TrustBadge icon={UserX} text="Sem aparecer" />
          <TrustBadge icon={DollarSign} text="R$ 0 de investimento" />
          <TrustBadge icon={Clock} text="Menos de 1h/dia" />
        </div>

        {/* First CTA */}
        <div className="mt-8">
          <CTAButton
            label="Quero Aprender Agora"
            sub="Por apenas R$ 47 - Acesso imediato"
            url={CHECKOUT_URL}
          />
          <div className="flex items-center justify-center gap-2 mt-3 text-[#999999] text-xs">
            <Lock className="w-3.5 h-3.5" />
            <span>Pagamento 100% seguro - Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight mb-2 text-center">
          Como Funciona na Pratica
        </h2>
        <p className="text-[#777777] text-sm text-center mb-6">
          3 passos simples. So isso.
        </p>

        <div className="space-y-4">
          {[
            {
              step: "1",
              icon: Play,
              title: "Escolha e baixe um video que ja existe",
              desc: "Pode ser corte de pregacao, podcast, futebol, humor, pegadinha... qualquer video que ja fez sucesso. A I.A. baixa e adapta pro formato certo em segundos.",
            },
            {
              step: "2",
              icon: Target,
              title: "Poste na sua pagina com uma legenda estrategica",
              desc: "Voce nao precisa aparecer. A pagina pode ser anonima. A legenda direciona as pessoas pros seus stories, onde esta o link de afiliado.",
            },
            {
              step: "3",
              icon: DollarSign,
              title: "Receba comissao quando alguem comprar",
              desc: "Cada pessoa que clicar no seu link e comprar, voce ganha uma comissao. Cai direto no Pix. Comissoes de R$ 50 a R$ 200+ por venda.",
            },
          ].map(({ step, icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 sm:p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#111111] text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="text-[#111111] font-bold text-[15px] sm:text-base flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#22c55e]" />
                    {title}
                  </h3>
                  <p className="text-[#555555] text-xs sm:text-sm leading-relaxed mt-1.5">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clarification */}
        <div className="mt-6 bg-[#fffbeb] border border-[#fde68a] rounded-xl p-4 text-center">
          <p className="text-[#92400e] text-xs sm:text-sm leading-relaxed">
            <span className="font-bold">Isso nao e esquema, nao e piramide, nao e magica.</span>{" "}
            E marketing de afiliacao -- o mesmo modelo que empresas como Avon, Natura, Amazon e
            Shopee usam ha decadas. Voce divulga produtos de terceiros e ganha comissao por cada venda.{" "}
            <span className="font-semibold">100% legal e funciona.</span>
          </p>
        </div>
      </section>

      {/* ===== PROOF CAROUSEL ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <ProofCarousel />
      </section>

      {/* ===== SECOND CTA ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <CTAButton
          label="Quero Comecar Agora"
          sub="Acesso imediato + Garantia 7 dias"
          url={CHECKOUT_URL}
        />
      </section>

      {/* ===== EMOTIONAL SECTION ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-5 sm:p-7">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Heart className="w-5 h-5 text-[#e02020]" />
            <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight">
              Isso E Pra Voce Se...
            </h2>
          </div>

          <div className="space-y-3 text-[#333333] text-sm sm:text-[15px] leading-relaxed">
            <p>
              <CheckCircle className="w-4 h-4 text-[#22c55e] inline mr-2" />
              Voce esta precisando de uma <span className="font-semibold">renda extra</span> pra
              aliviar as contas no fim do mes
            </p>
            <p>
              <CheckCircle className="w-4 h-4 text-[#22c55e] inline mr-2" />
              Voce quer algo que da pra fazer <span className="font-semibold">so com o celular</span>,
              sem precisar de equipamento caro
            </p>
            <p>
              <CheckCircle className="w-4 h-4 text-[#22c55e] inline mr-2" />
              Voce <span className="font-semibold">nao quer aparecer</span> em video,
              tem vergonha ou simplesmente prefere privacidade
            </p>
            <p>
              <CheckCircle className="w-4 h-4 text-[#22c55e] inline mr-2" />
              Voce ja tentou outras coisas na internet e{" "}
              <span className="font-semibold">nada deu certo</span> ate agora
            </p>
            <p>
              <CheckCircle className="w-4 h-4 text-[#22c55e] inline mr-2" />
              Voce quer algo <span className="font-semibold">simples e honesto</span>,
              sem promessa de ficar rico da noite pro dia
            </p>
          </div>

          <div className="mt-5 pt-5 border-t border-[#e5e5e5]">
            <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed text-center">
              E se voce escolher o nicho cristao, ainda pode{" "}
              <span className="text-[#111111] font-semibold">
                ganhar dinheiro enquanto leva a Palavra de Deus
              </span>{" "}
              a milhares de pessoas que talvez nunca pisariam numa igreja.
            </p>
            <p className="text-[#777777] text-xs sm:text-sm text-center mt-2">
              (Mas funciona em qualquer nicho: futebol, humor, pegadinhas, novelas, motivacao...)
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="border-2 border-[#111111] rounded-2xl bg-white p-5 sm:p-7">
          <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight text-center mb-1">
            O Que Voce Vai Receber
          </h2>
          <p className="text-[#888888] text-xs sm:text-sm text-center mb-6">
            Acesso imediato e vitalicio
          </p>

          <div className="space-y-3">
            {[
              {
                icon: CheckCircle,
                title: "Metodo Completo de Cortes",
                desc: "Como achar, baixar, editar com I.A. e postar em todas as plataformas",
              },
              {
                icon: CheckCircle,
                title: "Sites de Afiliacao",
                desc: "Quais usar, como se cadastrar e escolher produtos que vendem",
              },
              {
                icon: CheckCircle,
                title: "Legendas e Hashtags",
                desc: "Copias prontas pra usar e estrategias pra atingir as pessoas certas",
              },
              {
                icon: TrendingUp,
                title: "Estrategia de Video Review",
                desc: "Como fazer reviews no YouTube que vendem no automatico",
              },
              {
                icon: MessageCircle,
                title: "Vendas pelo WhatsApp",
                desc: "Como trazer clientes pro WhatsApp e fechar vendas por mensagem",
              },
              {
                icon: Zap,
                title: "Introducao ao Trafego Pago",
                desc: "Pra quando voce quiser acelerar e escalar seus resultados",
              },
              {
                icon: CheckCircle,
                title: "Acesso Vitalicio",
                desc: "Assista no seu ritmo, volte sempre que precisar, sem mensalidade",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#111111] font-bold text-sm sm:text-[15px]">{title}</span>
                  <span className="text-[#555555] text-xs sm:text-sm"> - {desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-7 pt-6 border-t border-[#e5e5e5] text-center">
            <p className="text-[#999999] text-sm">De <span className="line-through">R$ 197</span></p>
            <p className="text-[#111111] font-serif uppercase text-4xl sm:text-5xl font-bold mt-1">
              R$ 47
            </p>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">
              Pagamento unico. Sem mensalidade. Sem taxa escondida.
            </p>
          </div>

          <div className="mt-5">
            <CTAButton
              label="Quero Minha Vaga Agora"
              sub="Acesso imediato + Garantia de 7 dias"
              url={CHECKOUT_URL}
            />
          </div>
        </div>
      </section>

      {/* ===== GUARANTEE ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-[#f0fdf4] border-2 border-[#22c55e] rounded-2xl p-5 sm:p-7 text-center">
          <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-[#22c55e] mx-auto" />
          <h3 className="text-[#111111] font-bold text-lg sm:text-xl mt-3 mb-2 font-serif uppercase tracking-tight">
            Garantia Total de 7 Dias
          </h3>
          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto">
            Acesse tudo por 7 dias. Se por{" "}
            <span className="font-semibold text-[#111111]">qualquer motivo</span> voce achar que nao
            e pra voce, basta mandar um email e devolvemos cada centavo.{" "}
            <span className="font-semibold text-[#111111]">
              Sem perguntas, sem burocracia. O risco e todo nosso.
            </span>
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="pb-10 sm:pb-14">
        <Testimonials />
      </section>

      {/* ===== OBJECTION HANDLING ===== */}
      <section className="pb-10 sm:pb-14">
        <ObjectionSection />
      </section>

      {/* ===== FAQ ===== */}
      <section className="pb-10 sm:pb-14">
        <FAQSection />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-[#111111] rounded-2xl p-5 sm:p-8 text-center">
          <h2 className="text-white font-serif uppercase text-lg sm:text-xl font-bold tracking-tight mb-3">
            A Decisao E Sua
          </h2>
          <p className="text-[#bbbbbb] text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto mb-6">
            Voce pode fechar essa pagina e continuar como esta. Ou pode investir{" "}
            <span className="text-white font-bold">R$ 47</span> -- menos que um lanche no shopping --
            e descobrir um caminho simples pra comecar a ganhar dinheiro com o celular que ja ta na sua mao.
          </p>
          <CTAButton
            label="Quero Comecar Agora"
            sub="Por apenas R$ 47 - Risco zero"
            url={CHECKOUT_URL}
            variant="primary"
          />
          <div className="flex items-center justify-center gap-2 mt-4 text-[#777777] text-xs">
            <Lock className="w-3.5 h-3.5" />
            <span>Pagamento seguro via Kiwify - Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-4 border-t border-[#e5e5e5]">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[#999999] text-[11px] leading-relaxed">
            Este produto e vendido atraves da Kiwify. A plataforma de pagamento oferece
            garantia de 7 dias para reembolso. Ao adquirir, voce concorda com os termos de uso
            e politica de privacidade da plataforma. Este site nao e afiliado ao Facebook,
            Google, YouTube, Instagram ou qualquer outra plataforma mencionada.
          </p>
        </div>
      </footer>
    </main>
  )
}

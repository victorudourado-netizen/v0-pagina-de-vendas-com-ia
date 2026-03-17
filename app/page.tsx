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
  Eye,
  Video,
  Share2,
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
    <div className="flex items-center gap-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-full px-3 py-1.5">
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
    <main className="min-h-screen bg-[#fafafa] selection:bg-[#22c55e]/10 pb-20 sm:pb-0">
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
          Como pessoas comuns estao{" "}
          <span className="text-[#e02020]">ganhando dinheiro</span>{" "}
          pelo celular postando videos simples{" "}
          <span className="text-[#555555] font-normal text-[22px] sm:text-3xl md:text-[34px]">
            (inclusive conteudos cristaos)
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#444444] text-sm sm:text-[17px] mt-5 sm:mt-6 leading-relaxed text-center text-pretty max-w-[560px] mx-auto">
          Sem aparecer, sem gravar nada, sem investir dinheiro e usando apenas o celular.{" "}
          <span className="text-[#111111] font-semibold">
            Funciona mesmo comecando do zero.
          </span>
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <TrustBadge icon={Smartphone} text="So precisa do celular" />
          <TrustBadge icon={UserX} text="Sem aparecer" />
          <TrustBadge icon={DollarSign} text="R$ 0 de investimento" />
        </div>

        {/* First CTA */}
        <div className="mt-8">
          <CTAButton
            label="Quero Aprender Agora"
            sub="Por apenas R$ 47 - Acesso imediato"
            url={CHECKOUT_URL}
          />
          <div className="flex items-center justify-center gap-2 mt-3 text-[#888888] text-xs">
            <Lock className="w-3.5 h-3.5" />
            <span>Pagamento 100% seguro - Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-white border border-[#e5e5e5] rounded-2xl p-5 sm:p-7">
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
                icon: Video,
                title: "Baixe um video que ja existe",
                desc: "Pode ser corte de pregacao, podcast, futebol, humor, pegadinha... qualquer video que ja fez sucesso. Voce baixa e a I.A. adapta pro formato certo em segundos.",
              },
              {
                step: "2",
                icon: Share2,
                title: "Poste na sua pagina anonima",
                desc: "Voce nao precisa aparecer. A pagina pode ser anonima. Na legenda, voce direciona as pessoas pros seus stories, onde esta o link de afiliado.",
              },
              {
                step: "3",
                icon: DollarSign,
                title: "Receba comissao por cada venda",
                desc: "Cada pessoa que clicar no seu link e comprar, voce ganha uma comissao. Cai direto no Pix. Comissoes de R$ 50 a R$ 200+ por venda.",
              },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl p-4"
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
          <div className="mt-5 bg-[#fffbeb] border border-[#fcd34d] rounded-xl p-4">
            <p className="text-[#92400e] text-xs sm:text-sm leading-relaxed">
              <span className="font-bold">Isso nao e esquema.</span>{" "}
              E marketing de afiliacao -- o mesmo modelo que Avon, Natura, Amazon e
              Shopee usam ha decadas. Voce divulga produtos de terceiros e ganha comissao.{" "}
              <span className="font-semibold">100% legal.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY IT WORKS TODAY ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-white border border-[#e5e5e5] rounded-2xl p-5 sm:p-7">
          <div className="flex items-center gap-2 justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-[#e02020]" />
            <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight">
              Por que isso funciona hoje
            </h2>
          </div>

          <div className="space-y-4 text-[#333333] text-sm sm:text-[15px] leading-relaxed">
            <p>
              As pessoas passam <span className="font-semibold">horas por dia</span> rolando o feed do Instagram, TikTok e YouTube Shorts. Sao bilhoes de visualizacoes por dia so no Brasil.
            </p>
            <p>
              Enquanto isso, existem milhares de produtos sendo vendidos por afiliacao -- e as empresas pagam comissoes de <span className="font-semibold">R$ 50 a R$ 300</span> pra quem ajuda a vender.
            </p>
            <p>
              O segredo e simples: voce pega um video que ja funciona, posta no formato certo, e direciona as pessoas pro link de compra. Quem compra, voce ganha.
            </p>
            <p className="text-[#555555] text-sm">
              Nao precisa ser famoso. Nao precisa ter seguidores. Nao precisa aparecer. So precisa postar com consistencia.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROOF CAROUSEL ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-white border border-[#e5e5e5] rounded-2xl p-5 sm:p-7">
          <ProofCarousel />
        </div>
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
        <div className="bg-white border border-[#e5e5e5] rounded-2xl p-5 sm:p-7">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Heart className="w-5 h-5 text-[#e02020]" />
            <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight">
              Isso e pra voce se...
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
            <p>
              <CheckCircle className="w-4 h-4 text-[#22c55e] inline mr-2" />
              Voce ta cansado de <span className="font-semibold">promessa furada</span> e quer algo que realmente funciona
            </p>
          </div>

        </div>
      </section>

      {/* ===== CHRISTIAN EMOTIONAL SECTION ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-gradient-to-b from-[#fefce8] to-[#fef9c3] border border-[#fcd34d] rounded-2xl p-5 sm:p-7">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Heart className="w-5 h-5 text-[#ca8a04]" />
            <h2 className="text-[#78350f] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight">
              Se voce e cristao, isso fica ainda mais poderoso
            </h2>
          </div>

          <p className="text-[#854d0e] text-sm sm:text-[15px] leading-relaxed text-center mb-5">
            Voce pode ganhar dinheiro enquanto compartilha conteudos que{" "}
            <span className="font-semibold">edificam vidas e levam esperanca</span> pra milhares de pessoas.
          </p>

          <div className="space-y-3 text-[#713f12] text-sm sm:text-[15px]">
            <p className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#ca8a04] shrink-0 mt-0.5" />
              <span>Cortes de pregacoes que transformam vidas</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#ca8a04] shrink-0 mt-0.5" />
              <span>Mensagens que fortalecem e consolam pessoas</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#ca8a04] shrink-0 mt-0.5" />
              <span>Conteudos que alcancam quem talvez nunca pisaria numa igreja</span>
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-[#fcd34d]/50">
            <p className="text-[#92400e] text-xs sm:text-sm text-center italic">
              Mas se voce nao e cristao, funciona igual com outros tipos de conteudo:{" "}
              futebol, humor, pegadinhas, motivacao, fofoca, novelas...
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <div className="bg-white border-2 border-[#111111] rounded-2xl p-5 sm:p-7">
          <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight text-center mb-1">
            O Que Voce Vai Receber Hoje
          </h2>
          <p className="text-[#888888] text-xs sm:text-sm text-center mb-6">
            Acesso imediato e vitalicio
          </p>

          <div className="space-y-3">
            {[
              {
                icon: CheckCircle,
                title: "Metodo Completo de Cortes",
                desc: "Passo a passo pra achar, baixar, editar com I.A. e postar em todas as plataformas",
              },
              {
                icon: CheckCircle,
                title: "Sites de Afiliacao",
                desc: "Quais usar, como se cadastrar e escolher produtos que realmente vendem",
              },
              {
                icon: CheckCircle,
                title: "Legendas e Hashtags",
                desc: "Copias prontas pra usar e estrategias pra atingir as pessoas certas",
              },
              {
                icon: TrendingUp,
                title: "Estrategia de Video Review",
                desc: "Como fazer reviews no YouTube que vendem no automatico enquanto voce dorme",
              },
              {
                icon: MessageCircle,
                title: "Vendas pelo WhatsApp",
                desc: "Como trazer clientes pro WhatsApp e fechar vendas por mensagem",
              },
              {
                icon: Zap,
                title: "Introducao ao Trafego Pago",
                desc: "Pra quando voce quiser acelerar e escalar seus resultados (opcional)",
              },
              {
                icon: Clock,
                title: "Acesso Vitalicio",
                desc: "Assista no seu ritmo, volte sempre que precisar, sem mensalidade",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#f8f8f8] border border-[#e5e5e5] rounded-lg p-3">
                <Icon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#111111] font-bold text-sm sm:text-[15px]">{title}</span>
                  <span className="text-[#555555] text-xs sm:text-sm block mt-0.5">{desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-7 pt-6 border-t border-[#e5e5e5] text-center">
            <p className="text-[#999999] text-sm">Valor normal: <span className="line-through">R$ 197</span></p>
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
          <p className="text-[#444444] text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto">
            Acesse tudo por 7 dias. Se por{" "}
            <span className="font-semibold text-[#111111]">qualquer motivo</span> voce achar que nao
            e pra voce, basta mandar um email e devolvemos cada centavo.{" "}
            <span className="font-semibold text-[#111111]">
              Sem perguntas. Sem burocracia. O risco e todo nosso.
            </span>
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="pb-10 sm:pb-14">
        <Testimonials />
      </section>

      {/* ===== THIRD CTA ===== */}
      <section className="px-4 pb-10 sm:pb-14 max-w-[680px] mx-auto">
        <CTAButton
          label="Quero Comecar Agora"
          sub="Por apenas R$ 47 - Risco zero"
          url={CHECKOUT_URL}
        />
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
          <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed max-w-[500px] mx-auto mb-6">
            Voce pode fechar essa pagina e continuar fazendo o que sempre fez. Ou pode investir{" "}
            <span className="text-white font-bold">R$ 47</span> -- menos que um lanche no shopping --
            e testar um caminho simples pra comecar a ganhar dinheiro extra com o celular que ja ta na sua mao.
          </p>
          <p className="text-[#888888] text-xs sm:text-sm mb-6">
            Se nao funcionar pra voce, devolvo seu dinheiro em ate 7 dias. Simples assim.
          </p>
          <CTAButton
            label="Quero Comecar Agora"
            sub="Acesso imediato - Garantia de 7 dias"
            url={CHECKOUT_URL}
            variant="primary"
          />
          <div className="flex items-center justify-center gap-2 mt-4 text-[#666666] text-xs">
            <Lock className="w-3.5 h-3.5" />
            <span>Pagamento seguro via Kiwify</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-4 border-t border-[#e5e5e5] bg-white">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[#888888] text-[11px] leading-relaxed">
            Este produto e vendido atraves da Kiwify. A plataforma de pagamento oferece
            garantia de 7 dias para reembolso. Ao adquirir, voce concorda com os termos de uso
            e politica de privacidade da plataforma. Este site nao e afiliado ao Facebook,
            Google, YouTube, Instagram ou qualquer outra plataforma mencionada. Os resultados
            apresentados sao de pessoas reais, mas podem variar de acordo com o esforco e
            dedicacao de cada pessoa.
          </p>
        </div>
      </footer>
    </main>
  )
}

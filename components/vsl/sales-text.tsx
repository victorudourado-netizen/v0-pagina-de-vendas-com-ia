"use client"

import { CheckCircle, Smartphone, Eye, DollarSign, Clock, Zap, TrendingUp, MessageCircle } from "lucide-react"

interface SalesTextProps {
  showCTA: boolean
  checkoutUrl: string
}

export function SalesText({ showCTA, checkoutUrl }: SalesTextProps) {
  return (
    <div className="w-full max-w-[700px] mx-auto font-sans">
      {/* Opening hook */}
      <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
        <p>
          Existe uma forma de ganhar dinheiro na internet que{" "}
          <span className="text-[#111111] font-semibold">
            nao exige aparecer, nao exige investir e funciona apenas com um celular.
          </span>
        </p>
        <p>
          Nao e aposta. Nao e jogo. Nao e nada ilegal. E uma estrategia simples
          baseada em marketing de afiliacao -- o mesmo modelo que empresas como
          Avon e Natura usaram no Brasil nos anos 90. So que agora, tudo acontece
          pela internet.
        </p>
        <p>
          Grandes sites que vendem produtos online -- concorrentes diretos da Amazon
          e da Shopee -- pagam comissoes para pessoas comuns divulgarem seus produtos.
          Isso existe ha mais de 20 anos e se chama{" "}
          <span className="text-[#111111] font-semibold">afiliacao</span>. Voce pega
          um link, alguem compra por ele, voce recebe sua comissao. Simples assim.
        </p>
      </div>

      {/* The method */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#f9fafb] border border-[#e5e5e5] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-4 font-serif uppercase tracking-tight">
          O Metodo: Como Funciona Na Pratica
        </h3>
        <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Voce pega um video que ja existe na internet -- um corte de pregacao, um
            trecho de podcast cristao, um video motivacional -- e usa uma inteligencia
            artificial gratuita para baixar e editar esse video em segundos, adaptando
            pro formato vertical (Reels, Shorts, TikTok).
          </p>
          <p>
            Posta na sua pagina anonima com uma legenda estrategica direcionando
            para os stories. Nos stories, coloca o link de um produto que paga comissao.
          </p>
          <div className="bg-white border border-[#e0e0e0] rounded-lg p-3 sm:p-4 italic text-[#555555] text-sm">
            {"Exemplo: um unico video com menos de 400 visualizacoes gerou uma comissao de R$ 110 -- em uma venda de uma pessoa que viu o corte, entrou nos stories, gostou do produto e comprou."}
          </div>
          <p>
            E o melhor: esse video fica la no perfil vendendo como se fosse um funcionario
            que trabalha 24 horas por dia, 7 dias por semana, sem pedir salario. E voce
            pode ter dezenas de videos assim.
          </p>
        </div>
      </div>

      {/* Multiple strategies */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-4 font-serif uppercase tracking-tight">
          Mas Nao Para Por Ai
        </h3>
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-5">
          Alem dos cortes de videos, o metodo ensina outras formas de ganhar dinheiro
          como afiliado sem precisar investir nada:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Smartphone, text: "Cortes de videos cristaos, podcasts e outros nichos" },
            { icon: TrendingUp, text: "Video Review: criar reviews de produtos no YouTube" },
            { icon: MessageCircle, text: "Como trazer clientes direto pro seu WhatsApp" },
            { icon: Eye, text: "Introducao ao trafego pago para escalar resultados" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-[#f0fdf4] rounded-lg border border-[#bbf7d0]">
              <Icon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-[#111111] text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3">
        {[
          { icon: Smartphone, label: "Tudo pelo celular" },
          { icon: Eye, label: "Sem aparecer" },
          { icon: DollarSign, label: "Zero investimento" },
          { icon: Clock, label: "Menos de 1h/dia" },
        ].map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-4 bg-[#f9fafb] rounded-xl border border-[#e5e5e5] text-center">
            <Icon className="w-6 h-6 text-[#22c55e]" />
            <span className="text-[#111111] text-xs sm:text-sm font-semibold">{label}</span>
          </div>
        ))}
      </div>

      {/* What you get */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 border-2 border-[#111111] rounded-xl bg-white">
        <h3 className="text-[#111111] font-bold text-lg sm:text-xl mb-1 font-serif uppercase tracking-tight text-center">
          O Que Voce Vai Receber
        </h3>
        <p className="text-[#999999] text-xs sm:text-sm text-center mb-5">
          Acesso imediato a todas as gravacoes passo a passo
        </p>
        <div className="space-y-3">
          {[
            "Metodo Cortes Abençoados completo: como achar videos, baixar, editar com I.A. e postar em todas as plataformas (Instagram, TikTok, YouTube, Kwai)",
            "Quais sites usar para se afiliar e ganhar comissao -- concorrentes da Amazon e Shopee que pagam ate 50% ou mais de comissao por venda",
            "Quais legendas, hashtags e estrategias usar para alcançar exatamente as pessoas certas",
            "Estrategia de Video Review: como criar reviews em video pelo YouTube e vender ainda mais como afiliado",
            "Como trazer clientes direto pro seu WhatsApp e fechar vendas com mensagens simples",
            "Introducao ao Trafego Pago: para quando voce quiser escalar e multiplicar seus resultados",
            "Acesso vitalicio: assista quantas vezes quiser, no seu ritmo, volte sempre que precisar",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-[#333333] text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price anchor */}
      <div className="mt-8 sm:mt-10 text-center">
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
          Um metodo capaz de gerar{" "}
          <span className="text-[#111111] font-bold">R$ 100 a R$ 300 por dia</span>{" "}
          usando apenas o celular poderia facilmente custar R$ 500 ou mais.
          Mas a ideia aqui e que qualquer pessoa consiga acessar, independente
          da situacao financeira.
        </p>
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed mt-3">
          Por isso, o investimento unico para ter acesso a tudo e:
        </p>
        {showCTA && (
          <div className="mt-5 animate-in fade-in duration-500">
            <p className="text-[#999999] text-sm line-through">De R$ 197</p>
            <p className="text-[#111111] font-serif uppercase text-4xl sm:text-5xl font-bold mt-1">
              R$ 47
            </p>
            <p className="text-[#666666] text-xs sm:text-sm mt-1">
              Menos que uma pizza. Menos que um tanque de combustivel.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-[#22c55e]">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Acesso imediato e automatico</span>
            </div>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block max-w-[420px] mx-auto mt-4"
            >
              <div className="absolute -inset-1 bg-[#22c55e]/20 rounded-xl blur-lg group-hover:bg-[#22c55e]/30 transition-all duration-300" />
              <div className="relative bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#22c55e]/25">
                <span className="block font-serif uppercase tracking-wide">Quero Comecar Agora</span>
                <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80">
                  Acesso imediato + Garantia de 7 dias
                </span>
              </div>
            </a>
          </div>
        )}
      </div>

      {/* Risk reversal */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#fffbeb] border border-[#fde68a] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-3 font-serif uppercase tracking-tight">
          Garantia Total de 7 Dias
        </h3>
        <div className="space-y-3 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Voce vai testar por{" "}
            <span className="text-[#111111] font-bold">7 dias completos.</span>{" "}
            Se achar que nao e pra voce, que nao conseguiu, que nao gostou
            -- basta pedir o reembolso e cada centavo sera devolvido. Sem perguntas,
            sem burocracia.
          </p>
          <p className="text-[#111111] font-semibold">
            Isso nao e tigrinho. Nao e aposta. E um metodo que funciona enquanto existir
            gente em rede social. Voce nao tem absolutamente nada a perder.
          </p>
        </div>
      </div>
    </div>
  )
}

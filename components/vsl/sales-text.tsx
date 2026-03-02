"use client"

import { CheckCircle, Smartphone, Eye, DollarSign, Clock, Zap } from "lucide-react"

interface SalesTextProps {
  showCTA: boolean
  checkoutUrl: string
}

export function SalesText({ showCTA, checkoutUrl }: SalesTextProps) {
  return (
    <div className="w-full max-w-[700px] mx-auto font-sans">
      {/* Opening story */}
      <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
        <p>
          Eu sou motorista de Uber em Goiania. Nao sou guruzinho de internet, nao tenho
          seguidores, nao gravo conteudo. Sou uma pessoa comum como voce.
        </p>
        <p>
          E no mes passado eu paguei minha conta de luz e de agua{" "}
          <span className="text-[#111111] font-semibold">
            so postando cortes evangelicos no Instagram.
          </span>
        </p>
        <p>
          Nao apareci em nenhum video. Nao gastei nenhum centavo. Fiz tudo pelo celular,
          no tempo livre entre uma corrida e outra.
        </p>
      </div>

      {/* The method explained */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#f9fafb] border border-[#e5e5e5] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-4 font-serif uppercase tracking-tight">
          Como Funciona Na Pratica
        </h3>
        <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Eu peguei um video de um pastor falando sobre a mulher se cuidar. Usei uma
            inteligencia artificial pra baixar e editar o corte em segundos. Postei na minha
            pagina anonima com a legenda:
          </p>
          <div className="bg-white border border-[#e0e0e0] rounded-lg p-3 sm:p-4 italic text-[#555555] text-sm">
            {'"Voce, irma, que quer perder 7 kg em ate 2 meses, assiste os stories que eu tenho uma surpresa para voce"'}
          </div>
          <p>
            Nos stories, coloquei o link de um produto de emagrecimento que paga{" "}
            <span className="text-[#111111] font-bold">R$ 110 de comissao por venda.</span>
          </p>
          <p>
            O video nem tinha chegado a 400 visualizacoes quando meu celular tocou:{" "}
            <span className="text-[#22c55e] font-bold">
              {"\"Venda aprovada. Sua comissao: R$ 110.\""}
            </span>
          </p>
          <p>
            Uma irma viu o corte, entrou nos stories, gostou do produto, pesquisou,
            comprou. Eu ganhei R$ 110 sem aparecer, sem falar com ninguem, sem gastar nada.
          </p>
        </div>
      </div>

      {/* What makes it powerful */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-4 font-serif uppercase tracking-tight">
          E O Melhor De Tudo
        </h3>
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-5">
          Esse video do pastor vai ficar la no meu perfil vendendo pra mim como se fosse um
          funcionario que nao pede salario, nao da atestado e trabalha 24h por dia, 7 dias
          por semana. E eu posso ter dezenas de videos assim, cada um gerando comissao.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Smartphone, text: "Tudo feito pelo celular, sem computador" },
            { icon: Eye, text: "Pagina anonima, voce nao precisa aparecer" },
            { icon: DollarSign, text: "Zero investimento, tudo gratuito" },
            { icon: Clock, text: "Menos de 1 hora por dia e suficiente" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-[#f0fdf4] rounded-lg border border-[#bbf7d0]">
              <Icon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-[#111111] text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What you get */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 border-2 border-[#111111] rounded-xl bg-white">
        <h3 className="text-[#111111] font-bold text-lg sm:text-xl mb-1 font-serif uppercase tracking-tight text-center">
          O Que Voce Vai Receber
        </h3>
        <p className="text-[#999999] text-xs sm:text-sm text-center mb-5">
          Gravacoes da tela do meu celular mostrando absolutamente tudo
        </p>
        <div className="space-y-3">
          {[
            "Metodo Cortes Abençoados completo: como achar videos, baixar, editar com I.A. e postar em todas as plataformas",
            "Quais sites usar para se afiliar e ganhar comissao (concorrentes da Amazon e Shopee que pagam 50%+ de comissao)",
            "Quais legendas, hashtags e estrategias usar para alcançar as pessoas certas",
            "Estrategia de Video Review: como criar reviews em video de produtos e vender ainda mais",
            "Introducao ao Trafego Pago: para quando voce quiser escalar seus resultados",
            "Como trazer clientes direto pro seu WhatsApp e fechar vendas por la",
            "Acesso vitalicio: assista quantas vezes quiser, no seu ritmo",
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
          Se um metodo que me gerou{" "}
          <span className="text-[#111111] font-bold">R$ 1.300 em 7 dias</span>{" "}
          sendo iniciante custasse R$ 500 ou R$ 1.000, ja seria barato. Mas eu nao vou
          cobrar nem perto disso.
        </p>
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed mt-3">
          O unico investimento para voce ver tudo o que eu faco, copiar e comecar hoje e:
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
                <span className="block font-serif uppercase tracking-wide">Quero Receber As Gravacoes</span>
                <span className="block text-xs sm:text-sm font-normal mt-1 text-white/80">
                  Acesso imediato + Garantia de 7 dias
                </span>
              </div>
            </a>
          </div>
        )}
      </div>

      {/* Risk reversal - spoken like the VSL */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#fffbeb] border border-[#fde68a] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-3 font-serif uppercase tracking-tight">
          Meu Compromisso Com Voce
        </h3>
        <div className="space-y-3 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Meu nome e Vitor. Minha cara ta no video. Meu Instagram e publico. Nao sou
            famosinho de internet, sou uma pessoa comum que nao ia colocar a reputacao em
            jogo se nao tivesse certeza de que isso funciona.
          </p>
          <p>
            Voce vai testar por{" "}
            <span className="text-[#111111] font-bold">7 dias.</span>{" "}
            Se achar que nao e pra voce, que nao consegue, que nao deu conta -- eu devolvo
            cada centavo. Sem perguntas. A unica pessoa que pode sair no prejuizo sou eu.
          </p>
          <p className="text-[#111111] font-semibold">
            Isso nao e tigrinho. Nao e aposta. E um metodo que funciona enquanto existir
            gente em rede social -- e voce ainda espalha a palavra de Deus fazendo isso.
          </p>
        </div>
      </div>
    </div>
  )
}

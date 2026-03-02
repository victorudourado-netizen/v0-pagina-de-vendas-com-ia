"use client"

import { CheckCircle, Smartphone, Eye, DollarSign, Clock, Zap, TrendingUp, MessageCircle, Heart } from "lucide-react"
import { ProofCarousel } from "./proof-carousel"

interface SalesTextProps {
  checkoutUrl: string
}

export function SalesText({ checkoutUrl }: SalesTextProps) {
  return (
    <div className="w-full max-w-[700px] mx-auto font-sans">
      {/* Emotional opening */}
      <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
        <p className="text-[#111111] font-semibold text-base sm:text-lg">
          Se voce chegou ate aqui, nao foi por acaso.
        </p>
        <p>
          Talvez voce esteja passando por um momento dificil. Talvez as contas estejam
          apertadas. Talvez voce ja tenha orado pedindo uma saida, uma oportunidade,
          um caminho. E talvez{" "}
          <span className="text-[#111111] font-semibold">essa seja a resposta.</span>
        </p>
        <p>
          Existe uma forma de ganhar dinheiro pela internet que{" "}
          <span className="text-[#111111] font-semibold">
            qualquer pessoa com um celular na mao pode comecar ainda hoje
          </span>
          {" "}-- sem aparecer, sem gastar um centavo, e o melhor: espalhando a
          Palavra de Deus pelas redes sociais.
        </p>
        <p>
          Enquanto voce ganha dinheiro, voce evangeliza. Enquanto voce paga suas contas,
          voce leva a Palavra a pessoas que talvez nunca pisariam numa igreja. Isso nao e
          coincidencia.{" "}
          <span className="text-[#111111] font-semibold italic">
            Isso e proposito.
          </span>
        </p>
      </div>

      {/* The method */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#f9fafb] border border-[#e5e5e5] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-4 font-serif uppercase tracking-tight">
          Como Funciona Na Pratica
        </h3>
        <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Voce pega um video que ja existe -- um corte de pregacao, um trecho de pastor,
            um video motivacional cristao -- e usa uma inteligencia artificial{" "}
            <span className="font-semibold text-[#111111]">gratuita</span> para baixar e editar
            em segundos, adaptando pro formato vertical (Reels, Shorts, TikTok).
          </p>
          <p>
            Adiciona uma legenda estrategica que direciona a pessoa pros stories.
            Nos stories, voce coloca o link de um produto que paga comissao.
            Alguem compra, voce recebe. Simples assim.
          </p>
          <p>
            Isso se chama <span className="font-semibold text-[#111111]">marketing de afiliacao</span>
            {" "}-- o mesmo modelo que empresas como Avon e Natura usaram no Brasil.
            So que agora, tudo acontece pelo celular. Grandes sites que vendem online
            pagam comissoes para pessoas comuns divulgarem seus produtos. Isso existe ha mais
            de 20 anos. E e 100% legal.
          </p>
        </div>
      </div>

      {/* Proof carousel */}
      <div className="mt-8 sm:mt-10">
        <ProofCarousel />
      </div>

      {/* Emotional bridge - the real story */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#fefce8] border border-[#fde68a] rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-[#e02020]" />
          <h3 className="text-[#111111] font-bold text-base sm:text-lg font-serif uppercase tracking-tight">
            Mais Que Dinheiro: Proposito
          </h3>
        </div>
        <div className="space-y-3 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Sabe o que e mais bonito nisso tudo? Voce nao esta vendendo nada
            que prejudica alguem. Voce esta pegando a pregacao de um pastor,
            de um homem de Deus, e levando essa mensagem pra milhares de pessoas
            que talvez{" "}
            <span className="text-[#111111] font-semibold italic">nunca ouviram o Evangelho.</span>
          </p>
          <p>
            E enquanto faz isso, voce ganha comissoes que{" "}
            <span className="text-[#111111] font-semibold">
              pagam suas contas, colocam comida na mesa e dao dignidade pra sua familia.
            </span>
          </p>
          <p>
            Tem gente que acha que cristao tem que ser pobre. Mas a Biblia diz:
          </p>
          <div className="bg-white border-l-4 border-[#b45309] p-3 sm:p-4 rounded-r-lg">
            <p className="text-[#111111] font-semibold italic text-sm sm:text-base">
              {'"O Senhor te abrira o seu bom tesouro e abençoara todas as obras das tuas maos."'}
            </p>
            <p className="text-[#888888] text-xs mt-1">Deuteronomio 28:12</p>
          </div>
          <p>
            Prosperar nao e pecado.{" "}
            <span className="text-[#111111] font-semibold">
              Prosperar fazendo a obra de Deus e bencao dobrada.
            </span>
          </p>
        </div>
      </div>

      {/* The ateu angle */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#fef2f2] border border-[#fecaca] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-3 font-serif uppercase tracking-tight">
          E Quer Saber O Que E Mais Impressionante?
        </h3>
        <div className="space-y-3 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Ate{" "}
            <span className="text-[#e02020] font-bold">
              pessoas que nao sao cristas estao ganhando dinheiro
            </span>
            {" "}postando cortes de pregacoes. Gente que nunca pisou numa igreja,
            que nao acredita em Deus, mas viu que o conteudo cristao tem um poder
            absurdo de viralizar nas redes sociais.
          </p>
          <p>
            Se ateus estao lucrando espalhando a Palavra...{" "}
            <span className="text-[#111111] font-bold italic">
              imagine voce, que tem fe, que tem proposito, que sabe o poder dessa mensagem?
            </span>
          </p>
          <p>
            Voce vai deixar que pessoas sem fe lucrem com aquilo que voce carrega
            no coracao? Ou vai tomar posse do que Deus preparou pra voce?
          </p>
        </div>
      </div>

      {/* Multiple strategies */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-4 font-serif uppercase tracking-tight">
          E Nao Para Por Ai
        </h3>
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-5">
          Alem dos cortes cristaos, voce vai aprender outras formas de ganhar
          dinheiro como afiliado sem investir nada:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Smartphone, text: "Cortes de videos cristaos, podcasts, futebol, pegadinhas e outros nichos" },
            { icon: TrendingUp, text: "Video Review: criar reviews de produtos no YouTube e vender como afiliado" },
            { icon: MessageCircle, text: "Como trazer clientes direto pro seu WhatsApp e fechar vendas" },
            { icon: Eye, text: "Introducao ao Trafego Pago: para quando quiser escalar seus resultados" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-[#f0fdf4] rounded-lg border border-[#bbf7d0]">
              <Icon className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-[#111111] text-xs sm:text-sm font-medium">{text}</span>
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
            "Quais sites usar para se afiliar -- concorrentes da Amazon e Shopee que pagam ate 50% ou mais de comissao por venda",
            "Quais legendas, hashtags e estrategias usar para atingir exatamente as pessoas certas",
            "Estrategia de Video Review: como criar reviews em video pelo YouTube e vender ainda mais",
            "Como trazer clientes direto pro seu WhatsApp e fechar vendas com mensagens simples",
            "Introducao ao Trafego Pago: para quando voce quiser escalar e multiplicar resultados",
            "Acesso vitalicio: assista quantas vezes quiser, no seu ritmo, volte sempre que precisar",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <span className="text-[#333333] text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Emotional urgency before price */}
      <div className="mt-8 sm:mt-10 text-center space-y-4">
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
          Voce pode continuar fazendo o que sempre fez e continuar
          no mesmo lugar. Ou pode{" "}
          <span className="text-[#111111] font-bold">dar um passo de fe</span>{" "}
          e comecar algo que pode mudar a sua vida e a vida da sua familia.
        </p>
        <p className="text-[#111111] font-semibold text-sm sm:text-base">
          Deus nao coloca um sonho no seu coracao sem te dar os meios para realiza-lo.
          Esse pode ser o seu meio.
        </p>
      </div>

      {/* Price anchor */}
      <div className="mt-8 sm:mt-10 text-center">
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
          Um metodo capaz de gerar{" "}
          <span className="text-[#111111] font-bold">R$ 100 a R$ 300 por dia</span>{" "}
          usando apenas o celular poderia facilmente custar R$ 500 ou mais.
          Mas a ideia e que qualquer pessoa consiga acessar.
        </p>
        <p className="text-[#333333] text-sm sm:text-base leading-relaxed mt-3">
          O investimento unico para ter acesso a tudo e:
        </p>
        <div className="mt-5">
          <p className="text-[#999999] text-sm line-through">De R$ 197</p>
          <p className="text-[#111111] font-serif uppercase text-4xl sm:text-5xl font-bold mt-1">
            R$ 47
          </p>
          <p className="text-[#666666] text-xs sm:text-sm mt-1">
            Menos que um lanche no shopping. E pode mudar a sua vida.
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
      </div>

      {/* Guarantee with emotion */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#fffbeb] border border-[#fde68a] rounded-xl">
        <h3 className="text-[#111111] font-bold text-base sm:text-lg mb-3 font-serif uppercase tracking-tight">
          Garantia Total de 7 Dias
        </h3>
        <div className="space-y-3 text-[#333333] text-sm sm:text-base leading-relaxed">
          <p>
            Voce vai testar por{" "}
            <span className="text-[#111111] font-bold">7 dias completos.</span>{" "}
            Se nao gostar, se achar que nao e pra voce, se nao conseguir por
            qualquer motivo -- basta pedir o reembolso e cada centavo sera devolvido.
          </p>
          <p className="text-[#111111] font-semibold">
            Isso nao e aposta, nao e jogo. E um metodo real que funciona enquanto
            existir gente em rede social. Voce nao tem nada a perder.
            So tem a ganhar -- financeiramente e espiritualmente.
          </p>
        </div>
      </div>
    </div>
  )
}

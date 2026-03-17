"use client"

import { MessageCircle } from "lucide-react"

const objections = [
  {
    q: "Nao tenho dinheiro pra investir",
    a: "Esse metodo nao exige nenhum investimento. Voce usa apenas o celular que ja tem, aplicativos gratuitos e sites de afiliacao que nao cobram nada pra se cadastrar. O unico custo e o acesso ao metodo: R$ 47, uma unica vez.",
  },
  {
    q: "So tenho o celular, nao tenho computador",
    a: "Perfeito. Todo o metodo foi criado pra ser feito 100% pelo celular. Desde baixar o video ate postar e acompanhar as vendas. Nao precisa de computador, nao precisa de equipamento.",
  },
  {
    q: "Tenho vergonha de aparecer",
    a: "Voce nao aparece em nenhum momento. Voce posta videos de outras pessoas (pastores, influenciadores, podcasts) e monetiza direcionando pra links de afiliado. Sua pagina pode ser totalmente anonima.",
  },
  {
    q: "Sou ruim com tecnologia",
    a: "As gravacoes mostram o passo a passo na tela do celular, como se alguem estivesse do seu lado ensinando. Se voce sabe usar WhatsApp e Instagram, consegue fazer isso.",
  },
  {
    q: "Nao sou cristao, funciona pra mim?",
    a: "Sim. O metodo funciona em qualquer nicho: futebol, humor, pegadinhas, fofoca, novelas, motivacao. O nicho cristao e apenas um dos mais engajados, mas voce escolhe o que faz mais sentido pra voce.",
  },
  {
    q: "Isso e legal? Nao e esquema?",
    a: "100% legal. Marketing de afiliacao existe ha mais de 20 anos. Grandes empresas como Amazon, Shopee, Hotmart, Kiwify pagam comissoes pra pessoas divulgarem seus produtos. E o mesmo modelo que Avon e Natura usam ha decadas.",
  },
  {
    q: "Quanto tempo ate eu ver resultado?",
    a: "Depende do seu esforco e consistencia. Quem segue o passo a passo e posta todo dia costuma ver as primeiras vendas entre a primeira e a terceira semana. Alguns veem antes, outros demoram um pouco mais. Mas o metodo funciona.",
  },
]

export function ObjectionSection() {
  return (
    <div className="w-full max-w-[680px] mx-auto px-4">
      <div className="flex items-center gap-2 justify-center mb-5">
        <MessageCircle className="w-5 h-5 text-[#e02020]" />
        <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight">
          Talvez voce esteja pensando...
        </h2>
      </div>

      <div className="space-y-3">
        {objections.map((obj, i) => (
          <div
            key={i}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4"
          >
            <p className="text-[#111111] font-bold text-sm sm:text-[15px] mb-2">
              {`"${obj.q}"`}
            </p>
            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">
              {obj.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

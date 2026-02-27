"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Preciso investir dinheiro para comecar?",
    answer:
      "Nao! Essa e uma das maiores vantagens do metodo. Voce nao gasta nada para aplicar a estrategia. Todos os sites e ferramentas que ensinamos a usar sao gratuitos. O crescimento e 100% organico, sem necessidade de pagar por anuncios.",
  },
  {
    question: "O que e exatamente a estrategia de afiliacao?",
    answer:
      "Afiliacao, ou marketing de indicacao, existe ha mais de 20 anos. Sites que vendem produtos online, concorrentes de grandes plataformas como Amazon e Shopee, nao investem em TV ou anuncios tradicionais. Em vez disso, abrem a possibilidade para pessoas comuns divulgarem seus produtos e ganharem comissao por cada venda. E o mesmo modelo que empresas como Avon e Natura fizeram no Brasil nos anos 90 e 2000, so que agora e pela internet.",
  },
  {
    question: "Preciso aparecer ou gravar videos?",
    answer:
      "De jeito nenhum! O metodo inteiro e baseado em usar videos que ja existem na internet, como cortes de podcasts, pregacoes e conteudos inspiracionais. Voce aprende a cortar, editar com ajuda de I.A. e adaptar esses videos para formatos como Reels, Shorts e TikTok. Voce nunca precisa mostrar o rosto.",
  },
  {
    question: "Em quanto tempo vou comecar a ver resultados?",
    answer:
      "Depende da sua dedicacao, mas alunos que aplicam o metodo desde o inicio costumam ver os primeiros resultados entre 2 a 4 semanas. Alguns ate viralizaram na primeira semana. O segredo e a consistencia: postar todos os dias e seguir o passo a passo.",
  },
  {
    question: "Funciona mesmo para quem nao entende nada de tecnologia?",
    answer:
      "Com certeza! O metodo foi criado justamente para pessoas comuns, que nunca trabalharam com internet. Tudo e explicado passo a passo, de forma simples e direta. Se voce sabe usar o celular, voce consegue aplicar o metodo.",
  },
  {
    question: "Quais plataformas eu posso usar?",
    answer:
      "Voce pode crescer em todas as principais plataformas: Instagram (Reels), YouTube (Shorts), TikTok, Kwai e Facebook. O metodo ensina como adaptar o conteudo para cada uma delas e maximizar seu alcance.",
  },
  {
    question: "E se eu nao gostar ou nao funcionar pra mim?",
    answer:
      "Voce tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o metodo nao e pra voce, basta solicitar o reembolso e devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
      <h2 className="text-white text-xl font-bold text-center mb-6">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-[#222222] rounded-lg overflow-hidden bg-[#0a0a0a]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
            >
              <span className="text-white text-sm font-medium pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#666666] shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-[#999999] text-sm leading-relaxed px-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

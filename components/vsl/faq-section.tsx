"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-[#e5e5e5] rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left gap-3 cursor-pointer hover:bg-[#fafafa] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-[#111111] font-semibold text-sm sm:text-[15px] leading-snug">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[#999999] shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <p className="px-4 pb-4 text-[#555555] text-xs sm:text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "Quanto tempo leva pra ver resultados?",
    answer:
      "Depende do seu esforco e consistencia. Quem segue o metodo e posta todo dia costuma ver as primeiras vendas entre a primeira e a terceira semana. Alguns veem antes, outros demoram um pouco mais. Nao e da noite pro dia, mas funciona pra quem aplica.",
  },
  {
    question: "Preciso aparecer nos videos?",
    answer:
      "Nao. Voce posta videos de outras pessoas (pastores, podcasters, influenciadores, comediantes). Sua pagina pode ser totalmente anonima. Voce nunca precisa mostrar seu rosto nem gravar nada.",
  },
  {
    question: "Preciso investir dinheiro em anuncios?",
    answer:
      "Nao pra comecar. O metodo ensina estrategias 100% organicas (gratuitas) primeiro. Trafego pago e ensinado como bonus pra quando voce quiser acelerar, mas nao e obrigatorio.",
  },
  {
    question: "Funciona so com videos cristaos?",
    answer:
      "Nao. O metodo funciona em qualquer nicho: futebol, humor, pegadinhas, fofocas, novelas, motivacao, etc. O nicho cristao e apenas um dos mais engajados, mas voce escolhe o que faz sentido pra voce.",
  },
  {
    question: "E so pelo celular mesmo? Nao precisa de computador?",
    answer:
      "Sim, so pelo celular. Todo o processo e feito pelo celular: baixar video, editar com I.A., postar, acompanhar vendas. Voce nao precisa de computador, camera ou qualquer equipamento extra.",
  },
  {
    question: "O que sao esses sites de afiliacao?",
    answer:
      "Sao sites que vendem produtos online e pagam comissao pra pessoas divulgarem. E o mesmo modelo que Avon, Natura, Amazon e Shopee usam. Voce pega um link exclusivo, alguem compra por ele, voce recebe a comissao direto no Pix. Isso existe ha mais de 20 anos e e 100% legal.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Voce tem 7 dias pra testar tudo. Se por qualquer motivo achar que nao e pra voce, basta enviar um email pedindo reembolso. Devolvemos 100% do valor sem perguntas e sem burocracia.",
  },
  {
    question: "O acesso e vitalicio mesmo?",
    answer:
      "Sim. Voce paga uma unica vez (R$ 47) e tem acesso pra sempre. Pode assistir quando quiser, quantas vezes quiser, sem mensalidade ou taxa extra.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-[680px] mx-auto px-4">
      <div className="flex items-center gap-2 justify-center mb-5">
        <HelpCircle className="w-5 h-5 text-[#e02020]" />
        <h2 className="text-[#111111] font-serif uppercase text-lg sm:text-xl font-bold tracking-tight">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="space-y-2.5">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}

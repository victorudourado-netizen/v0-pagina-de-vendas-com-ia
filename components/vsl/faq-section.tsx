"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Preciso gastar alguma coisa pra comecar?",
    answer:
      "Nao. Todos os sites de afiliacao sao gratuitos pra se cadastrar. A inteligencia artificial que uso pra baixar e editar os videos e gratuita. E postar no Instagram, TikTok, YouTube e Kwai tambem e de graca. O unico investimento e o acesso as gravacoes por R$ 47.",
  },
  {
    question: "O que exatamente sao esses sites de afiliacao?",
    answer:
      "Sao sites que vendem produtos online, concorrentes da Amazon e Shopee. Eles nao investem em TV e anuncios tradicionais. Em vez disso, pagam comissao pra pessoas comuns divulgarem seus produtos. E o mesmo modelo que Avon e Natura fizeram nos anos 90, so que pela internet. Voce pega seu link, alguem compra por ele, voce recebe sua comissao. Simples assim.",
  },
  {
    question: "Preciso aparecer ou mostrar meu rosto?",
    answer:
      "De jeito nenhum. Minha pagina e anonima. Voce usa videos que ja existem, de pastores, podcasts e outros conteudos. A I.A. baixa e edita pra voce. Voce nunca precisa gravar nada nem mostrar o rosto.",
  },
  {
    question: "Consigo fazer isso so pelo celular?",
    answer:
      "Sim. Eu fiz tudo pelo celular e as gravacoes foram feitas na tela do celular justamente pra provar que nao precisa de computador. Se voce sabe mexer no celular, voce consegue.",
  },
  {
    question: "O que e a estrategia de Video Review?",
    answer:
      "Alem dos cortes cristaos, eu ensino como criar videos de review de produtos pra vender ainda mais como afiliado. E uma forma de diversificar e aumentar suas comissoes usando o mesmo metodo simples.",
  },
  {
    question: "Tem algo sobre trafego pago?",
    answer:
      "Sim. Inclui uma introducao ao trafego pago pra quando voce quiser escalar seus resultados, e tambem como trazer clientes direto pro seu WhatsApp. Mas o metodo principal e 100% organico e gratuito.",
  },
  {
    question: "Em quanto tempo vou ver resultado?",
    answer:
      "Depende da sua dedicacao, mas com menos de 1 hora por dia da pra aplicar. Pessoas que seguiram o passo a passo viram resultado entre a primeira e a terceira semana. Eu mesmo fiz minha primeira venda com menos de 400 visualizacoes.",
  },
  {
    question: "Funciona pra outros nichos alem do cristao?",
    answer:
      "Com certeza. O metodo funciona com qualquer tipo de video: pegadinhas, futebol, humor, motivacional. Varios alunos estao aplicando em nichos diferentes e tendo otimos resultados.",
  },
  {
    question: "E se eu nao gostar ou nao conseguir?",
    answer:
      "Voce tem 7 dias de garantia incondicional. Teste, assista as gravacoes, aplique. Se nao for pra voce, devolvo cada centavo sem perguntas. A unica pessoa que pode sair no prejuizo sou eu.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-[800px] mx-auto px-3 sm:px-4">
      <h2 className="text-[#111111] text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-[#e5e5e5] rounded-lg overflow-hidden bg-[#f9fafb]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-3 sm:p-4 text-left cursor-pointer"
            >
              <span className="text-[#111111] text-xs sm:text-sm font-medium pr-3 sm:pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#999999] shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed px-3 sm:px-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

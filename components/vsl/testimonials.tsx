"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Star } from "lucide-react"

interface Testimonial {
  name: string
  city: string
  text: string
  time: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    name: "Marcos Silva",
    city: "Goiania, GO",
    text: "Comecei do zero, sem saber nada de edicao. Hoje minha pagina no Instagram tem mais de 18 mil seguidores e ja fiz minhas primeiras vendas como afiliado. O metodo e simples e direto!",
    time: "2 dias atras",
    stars: 5,
  },
  {
    name: "Ana Paula",
    city: "Recife, PE",
    text: "Trabalho como caixa de supermercado e agora tenho uma renda extra que ja paga metade do meu aluguel. So cortando videos de pregacoes e postando. Deus e fiel!",
    time: "5 dias atras",
    stars: 5,
  },
  {
    name: "Roberto Nascimento",
    city: "Belo Horizonte, MG",
    text: "Eu sou motorista de app assim como o criador do metodo. Em 3 semanas meu canal no YouTube Shorts ja estava monetizando. A estrategia realmente funciona.",
    time: "1 semana atras",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    city: "Manaus, AM",
    text: "Tinha medo de investir em curso online, mas a garantia de 7 dias me deu seguranca. Melhor decisao que tomei! Ja fiz R$ 347 em comissoes no primeiro mes.",
    time: "3 dias atras",
    stars: 5,
  },
  {
    name: "Carlos Eduardo",
    city: "Curitiba, PR",
    text: "O melhor e que nao precisa aparecer e nem gravar nada. Voce so usa videos que ja existem e adapta pro formato certo. Genial e simples ao mesmo tempo.",
    time: "4 dias atras",
    stars: 5,
  },
  {
    name: "Patricia Almeida",
    city: "Salvador, BA",
    text: "Sou mae solteira e precisava de uma renda extra. Hoje consigo trabalhar de casa, nos meus horarios, e minha pagina no TikTok ja tem mais de 40 mil seguidores. Obrigada pelo metodo!",
    time: "1 semana atras",
    stars: 5,
  },
  {
    name: "Fernando Souza",
    city: "Brasilia, DF",
    text: "Ja tinha tentado varias coisas no digital e nada dava certo. Esse metodo e diferente porque voce nao precisa gastar com anuncio. O crescimento e 100% organico.",
    time: "6 dias atras",
    stars: 5,
  },
  {
    name: "Luciana Mendes",
    city: "Fortaleza, CE",
    text: "Comecei postando 3 videos por dia e em 2 semanas um dos meus reels viralizou com 2 milhoes de visualizacoes. As comissoes comecaram a cair na conta. Que benção!",
    time: "2 dias atras",
    stars: 5,
  },
]

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? testimonials : testimonials.slice(0, 4)

  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
          ))}
        </div>
        <span className="text-sm text-[#a1a1a1]">
          Mais de 2.147 alunos aprovam o metodo
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {visible.map((t, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-[#222222] rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e02020]/20 flex items-center justify-center shrink-0">
                <span className="text-[#e02020] font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#666666] text-xs">{t.city}</p>
                  </div>
                  <span className="text-[#555555] text-xs whitespace-nowrap">{t.time}</span>
                </div>
                <div className="flex items-center gap-0.5 mt-1 mb-2">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-[#cccccc] text-sm leading-relaxed">{t.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 flex items-center gap-1 mx-auto text-[#e02020] text-sm hover:underline cursor-pointer"
        >
          {showAll ? (
            <>
              Ver menos <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Ver mais depoimentos <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  )
}

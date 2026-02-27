"use client"

import { useState } from "react"
import { ThumbsUp, ChevronDown, ChevronUp } from "lucide-react"

interface Comment {
  name: string
  avatar: string
  text: string
  time: string
  likes: number
}

const comments: Comment[] = [
  {
    name: "Fernanda Alves",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Consegui ganhar R$ 500 em 4 dias! Ja e um dinheiro que ajuda demais aqui em casa. Obrigada por tudo!",
    time: "2h",
    likes: 47,
  },
  {
    name: "Gabriel Ferreira",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Fiz minha primeira venda em 3 dias! Isso usando so o celular... to muito animado!",
    time: "5h",
    likes: 31,
  },
  {
    name: "Leticia Souza",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Consegui fazer minha primeira venda em 5 dias! To muito feliz, obrigado por compartilhar esse metodo!",
    time: "1d",
    likes: 89,
  },
  {
    name: "Marcos Silva",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Nunca imaginei que dava pra ganhar dinheiro so usando o celular. Ja to com varias visualizacoes, rumo a primeira venda!",
    time: "3h",
    likes: 22,
  },
  {
    name: "Vinicius Santos",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "To no quinto dia e ja comecei a receber varias mensagens pedindo mais informacoes. To empolgado demais!",
    time: "10min",
    likes: 15,
  },
  {
    name: "Patricia Gomes",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "15 dias e ja consegui ganhar R$ 1.000! Nem acredito, to ate emocionada!",
    time: "1d",
    likes: 56,
  },
  {
    name: "Lucas de Souza",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Resolvi tentar nos videos de pegadinhas e deu super certo! Ja consegui 3 vendas em uma semana!",
    time: "6h",
    likes: 38,
  },
  {
    name: "Maria Eduarda",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    text: "Minha familia desacreditou de mim, mas em 2 semanas ja fiz quatro vendas! E so agradecer mesmo!",
    time: "4h",
    likes: 103,
  },
  {
    name: "Pedro Oliveira",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "Comecei a aplicar nos videos de futebol e ja fiz 2 vendas! Ta dando super certo!",
    time: "1d",
    likes: 44,
  },
  {
    name: "Ana Paula",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Minha familia nao acreditava, mas ja fiz duas vendas e to super motivada agora. Deus e bom!",
    time: "7h",
    likes: 29,
  },
  {
    name: "Andre Barbosa",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Muito bom! Apliquei o metodo nos videos de humor e ja fiz R$ 900 em 10 dias. Valeu demais!",
    time: "3d",
    likes: 67,
  },
  {
    name: "Amanda Lima",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "To muito feliz! Recebendo muitas visualizacoes nos meus videos e vejo as vendas chegando! So usando o celular!",
    time: "8h",
    likes: 51,
  },
  {
    name: "Joao Santos",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "Em 7 dias ja consegui R$ 1.200! Muito feliz e grato por essa oportunidade!",
    time: "2d",
    likes: 74,
  },
  {
    name: "Camila Ferreira",
    avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    text: "Facil demais de fazer, so com o celular! Ja estou recebendo varias mensagens!",
    time: "12h",
    likes: 33,
  },
  {
    name: "Lucas Medeiros",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Postei video de futebol e em 12 dias ja consegui R$ 1.300! Esse metodo mudou minha vida!",
    time: "5h",
    likes: 82,
  },
  {
    name: "Janaina Costa",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    text: "Obrigada por compartilhar esse metodo! Ja vi resultado no primeiro video. Deus no comando sempre!",
    time: "1d",
    likes: 41,
  },
  {
    name: "Ricardo Lima",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    text: "Postei videos de pegadinhas e deu super certo! 15 dias e ja to vendo os resultados!",
    time: "9h",
    likes: 27,
  },
  {
    name: "Carla Mendes",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    text: "Muito obrigada! Ja consegui ganhar R$ 850 em 10 dias, to muito animada!",
    time: "16h",
    likes: 63,
  },
  {
    name: "Daniela Costa",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    text: "Ja estou vendo as primeiras visualizacoes. Logo logo sai a primeira venda! To confiante demais",
    time: "2d",
    likes: 35,
  },
  {
    name: "Felipe Andrade",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    text: "To aplicando e deu certo com videos de humor! Nem acreditei no quanto ta funcionando!",
    time: "3h",
    likes: 48,
  },
]

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set())
  const [likeCounts, setLikeCounts] = useState<number[]>(comments.map(c => c.likes))
  const visible = showAll ? comments : comments.slice(0, 6)

  const handleLike = (index: number) => {
    const globalIndex = index
    setLikedComments(prev => {
      const next = new Set(prev)
      if (next.has(globalIndex)) {
        next.delete(globalIndex)
      } else {
        next.add(globalIndex)
      }
      return next
    })
    setLikeCounts(prev => {
      const next = [...prev]
      if (likedComments.has(globalIndex)) {
        next[globalIndex] = comments[globalIndex].likes
      } else {
        next[globalIndex] = comments[globalIndex].likes + 1
      }
      return next
    })
  }

  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
      <h2 className="text-white font-serif text-xl md:text-2xl font-bold mb-6 text-center uppercase tracking-tight">
        Resultados Reais de Alunos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {visible.map((c, i) => (
          <div
            key={i}
            className="bg-[#f2f3f5] rounded-lg overflow-hidden"
          >
            {/* Comment card */}
            <div className="p-3 pb-2">
              <div className="flex items-start gap-3">
                <img
                  src={c.avatar}
                  alt={`Foto de ${c.name}`}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  crossOrigin="anonymous"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[#050505] font-bold text-[13px] leading-none">
                    {c.name}
                  </span>
                  <p className="text-[#050505] text-[13px] leading-relaxed mt-1">
                    {c.text}
                  </p>
                </div>
              </div>
            </div>
            {/* Like bar */}
            <div className="border-t border-[#dadde1] mx-3" />
            <div className="flex items-center px-3 py-1.5">
              <button
                onClick={() => handleLike(i)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#e4e6e9] transition-colors cursor-pointer"
              >
                <ThumbsUp
                  className={`w-4 h-4 ${
                    likedComments.has(i)
                      ? "text-[#1877f2] fill-[#1877f2]"
                      : "text-[#65676b]"
                  }`}
                />
                <span
                  className={`text-[13px] font-semibold ${
                    likedComments.has(i) ? "text-[#1877f2]" : "text-[#65676b]"
                  }`}
                >
                  Like
                </span>
              </button>
              <span className="text-[#65676b] text-[12px] ml-auto">
                {likeCounts[i]} {c.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-5 flex items-center gap-1.5 mx-auto text-[#e02020] text-sm font-medium hover:underline cursor-pointer"
      >
        {showAll ? (
          <>
            Ver menos comentarios <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Ver mais {comments.length - 6} comentarios <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  )
}

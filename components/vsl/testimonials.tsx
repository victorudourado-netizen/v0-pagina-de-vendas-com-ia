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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

const avatarColors = [
  "#1877f2", "#42b72a", "#f02849", "#1778f2", "#e7a33e",
  "#7b61ff", "#00a884", "#ff6b2b", "#f44336", "#2196f3",
  "#e91e63", "#009688", "#ff5722", "#673ab7", "#3f51b5",
  "#795548", "#607d8b", "#00bcd4", "#8bc34a", "#ff9800",
  "#c2185b", "#0277bd", "#558b2f", "#4e342e", "#37474f",
  "#00695c", "#bf360c", "#4a148c", "#1a237e", "#e65100",
  "#ad1457", "#006064", "#33691e",
]

function AvatarWithFallback({ src, name, index }: { src: string; name: string; index: number }) {
  const [imgFailed, setImgFailed] = useState(false)
  const bg = avatarColors[index % avatarColors.length]

  return (
    <div
      className="w-10 h-10 rounded-full shrink-0 relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <span className="text-white text-xs font-bold absolute">{getInitials(name)}</span>
      {!imgFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`Foto de ${name}`}
          className="w-full h-full rounded-full object-cover absolute inset-0 z-10"
          onError={() => setImgFailed(true)}
          loading="lazy"
        />
      )}
    </div>
  )
}

const comments: Comment[] = [
  {
    name: "Fernanda Alves",
    avatar: "https://i.pravatar.cc/150?img=1",
    text: "Consegui ganhar R$ 500 em 4 dias! Ja e um dinheiro que ajuda demais aqui em casa. Obrigada por tudo!",
    time: "2h",
    likes: 47,
  },
  {
    name: "Gabriel Ferreira",
    avatar: "https://i.pravatar.cc/150?img=3",
    text: "Fiz minha primeira venda em 3 dias! Isso usando so o celular... to muito animado!",
    time: "5h",
    likes: 31,
  },
  {
    name: "Leticia Souza",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Consegui fazer minha primeira venda em 5 dias! To muito feliz, obrigada por compartilhar esse metodo!",
    time: "1d",
    likes: 89,
  },
  {
    name: "Marcos Silva",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "Nunca imaginei que dava pra ganhar dinheiro so usando o celular. Ja to com varias visualizacoes, rumo a primeira venda!",
    time: "3h",
    likes: 22,
  },
  {
    name: "Vinicius Santos",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "To no quinto dia e ja comecei a receber varias mensagens pedindo mais informacoes. To empolgado demais!",
    time: "10min",
    likes: 15,
  },
  {
    name: "Patricia Gomes",
    avatar: "https://i.pravatar.cc/150?img=9",
    text: "15 dias e ja consegui ganhar R$ 1.000! Nem acredito, to ate emocionada!",
    time: "1d",
    likes: 56,
  },
  {
    name: "Lucas de Souza",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Resolvi tentar nos videos de pegadinhas e deu super certo! Ja consegui 3 vendas em uma semana!",
    time: "6h",
    likes: 38,
  },
  {
    name: "Maria Eduarda",
    avatar: "https://i.pravatar.cc/150?img=16",
    text: "Minha familia desacreditou de mim, mas em 2 semanas ja fiz quatro vendas! E so agradecer mesmo!",
    time: "4h",
    likes: 103,
  },
  {
    name: "Pedro Oliveira",
    avatar: "https://i.pravatar.cc/150?img=14",
    text: "Comecei a aplicar nos videos de futebol e ja fiz 2 vendas! Ta dando super certo!",
    time: "1d",
    likes: 44,
  },
  {
    name: "Ana Paula",
    avatar: "https://i.pravatar.cc/150?img=20",
    text: "Minha familia nao acreditava, mas ja fiz duas vendas e to super motivada agora. Deus e bom!",
    time: "7h",
    likes: 29,
  },
  {
    name: "Andre Barbosa",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "Muito bom! Apliquei o metodo nos videos de humor e ja fiz R$ 900 em 10 dias. Valeu demais!",
    time: "3d",
    likes: 67,
  },
  {
    name: "Amanda Lima",
    avatar: "https://i.pravatar.cc/150?img=23",
    text: "To muito feliz! Recebendo muitas visualizacoes nos meus videos e vejo as vendas chegando! So usando o celular!",
    time: "8h",
    likes: 51,
  },
  {
    name: "Joao Santos",
    avatar: "https://i.pravatar.cc/150?img=51",
    text: "Em 7 dias ja consegui R$ 1.200! Muito feliz e grato por essa oportunidade!",
    time: "2d",
    likes: 74,
  },
  {
    name: "Camila Ferreira",
    avatar: "https://i.pravatar.cc/150?img=25",
    text: "Facil demais de fazer, so com o celular! Ja estou recebendo varias mensagens!",
    time: "12h",
    likes: 33,
  },
  {
    name: "Lucas Medeiros",
    avatar: "https://i.pravatar.cc/150?img=52",
    text: "Postei video de futebol e em 12 dias ja consegui R$ 1.300! Esse metodo mudou minha vida!",
    time: "5h",
    likes: 82,
  },
  {
    name: "Janaina Costa",
    avatar: "https://i.pravatar.cc/150?img=26",
    text: "Obrigada por compartilhar esse metodo! Ja vi resultado no primeiro video. Deus no comando sempre!",
    time: "1d",
    likes: 41,
  },
  {
    name: "Ricardo Lima",
    avatar: "https://i.pravatar.cc/150?img=53",
    text: "Postei videos de pegadinhas e deu super certo! 15 dias e ja to vendo os resultados!",
    time: "9h",
    likes: 27,
  },
  {
    name: "Carla Mendes",
    avatar: "https://i.pravatar.cc/150?img=27",
    text: "Muito obrigada! Ja consegui ganhar R$ 850 em 10 dias, to muito animada!",
    time: "16h",
    likes: 63,
  },
  {
    name: "Daniela Costa",
    avatar: "https://i.pravatar.cc/150?img=28",
    text: "Ja estou vendo as primeiras visualizacoes. Logo logo sai a primeira venda! To confiante demais",
    time: "2d",
    likes: 35,
  },
  {
    name: "Felipe Andrade",
    avatar: "https://i.pravatar.cc/150?img=54",
    text: "To aplicando e deu certo com videos de humor! Nem acreditei no quanto ta funcionando!",
    time: "3h",
    likes: 48,
  },
  {
    name: "Elisangela Reis",
    avatar: "https://i.pravatar.cc/150?img=29",
    text: "Postei um corte do pastor Claudio Duarte falando sobre casamento e ja bateu 12 mil views em 2 dias. Primeira comissao veio ontem, gloria a Deus!",
    time: "45min",
    likes: 112,
  },
  {
    name: "Josias Nascimento",
    avatar: "https://i.pravatar.cc/150?img=55",
    text: "Sou diacono na minha igreja e tava com vergonha de tentar. Minha esposa me convenceu. Em 10 dias ja fiz R$ 680 postando cortes de pregacao. Deus e fiel!",
    time: "6h",
    likes: 94,
  },
  {
    name: "Raquel Oliveira",
    avatar: "https://i.pravatar.cc/150?img=30",
    text: "Chorei quando caiu a primeira comissao. R$ 110 reais. Parece pouco pra muita gente mas pra mim que tava sem nada foi um milagre de verdade. Obrigada Senhor!",
    time: "2d",
    likes: 187,
  },
  {
    name: "Thiago Moreira",
    avatar: "https://i.pravatar.cc/150?img=56",
    text: "O mais bonito e que enquanto ganho dinheiro to levando a Palavra pra pessoas que talvez nunca iriam numa igreja. Um seguidor me mandou mensagem dizendo que voltou a orar por causa de um corte meu",
    time: "1d",
    likes: 203,
  },
  {
    name: "Debora Santana",
    avatar: "https://i.pravatar.cc/150?img=31",
    text: "Mae solteira de 2 filhos. Faco tudo pelo celular enquanto eles dormem. Ja consegui pagar a conta de luz e comprar o material escolar. So com cortes de pastor!",
    time: "5h",
    likes: 156,
  },
  {
    name: "Roberto Carlos Silva",
    avatar: "https://i.pravatar.cc/150?img=57",
    text: "Tenho 58 anos e achei que nao ia conseguir mexer nessas coisas de internet. Minha neta me ajudou no primeiro video e agora faco sozinho. Ja to com R$ 430 em 12 dias",
    time: "8h",
    likes: 71,
  },
  {
    name: "Priscila Matos",
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "Postei um corte da Gabriela Lopes sobre ansiedade e viralizou com 45 mil views. Veio comissao de R$ 195 de um unico story. Que Deus abencoe quem criou esse metodo",
    time: "3h",
    likes: 134,
  },
  {
    name: "Wesley Aparecido",
    avatar: "https://i.pravatar.cc/150?img=58",
    text: "No comeco meu pastor achou estranho eu ganhar dinheiro com pregacao. Quando expliquei que estou evangelizando milhares de pessoas ele ficou emocionado e ate pediu pra eu ensinar outros irmaos",
    time: "1d",
    likes: 88,
  },
  {
    name: "Simone Batista",
    avatar: "https://i.pravatar.cc/150?img=34",
    text: "Melhor coisa e nao precisar aparecer. Sou timida demais. So corto o video, coloco a legenda e posto. Deus faz o resto. Ja fiz 3 vendas em 8 dias",
    time: "11h",
    likes: 77,
  },
  {
    name: "Marcos Aurelio",
    avatar: "https://i.pravatar.cc/150?img=59",
    text: "To desempregado ha 7 meses. Isso aqui ta me dando mais que o ultimo salario que eu recebia. R$ 1.400 em 3 semanas. So postando cortes de pregacao no Reels e TikTok. Deus abre portas!",
    time: "4h",
    likes: 145,
  },
  {
    name: "Natalia Pereira",
    avatar: "https://i.pravatar.cc/150?img=35",
    text: "O que mais gosto e saber que to fazendo a obra de Deus e ao mesmo tempo colocando comida na mesa. Meu marido ficou impressionado quando mostrei os R$ 320 que caiu no Pix",
    time: "9h",
    likes: 98,
  },
  {
    name: "Anderson Lima",
    avatar: "https://i.pravatar.cc/150?img=60",
    text: "Comecei com cortes cristaos mas tambem to testando com videos de motivacao e ta dando certo nos dois. Diversificar e tudo! Essa semana foram R$ 890",
    time: "14h",
    likes: 62,
  },
  {
    name: "Celia Rodrigues",
    avatar: "https://i.pravatar.cc/150?img=36",
    text: "Nunca imaginei que com 52 anos ia aprender a ganhar dinheiro pela internet. Postei 3 cortes do pastor Lucinho e um viralizou. Caiu R$ 195 no pix e eu so chorava. Deus e maravilhoso demais",
    time: "2d",
    likes: 176,
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
    <div className="w-full max-w-[800px] mx-auto px-3 sm:px-4">
      <h2 className="text-[#111111] font-serif text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center uppercase tracking-tight">
        Resultados de Pessoas Comuns
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {visible.map((c, i) => (
          <div
            key={i}
            className="bg-[#f2f3f5] rounded-lg overflow-hidden"
          >
            {/* Comment card */}
            <div className="p-3 pb-2">
              <div className="flex items-start gap-3">
                <AvatarWithFallback src={c.avatar} name={c.name} index={i} />
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
            Ver todos os {comments.length} comentarios <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Heart, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"

interface Comment {
  name: string
  handle: string
  avatar: string
  text: string
  time: string
  likes: number
  replies: number
}

const comments: Comment[] = [
  {
    name: "Maria S.",
    handle: "@maria.souzaa",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Nunca pensei que conseguiria! Em 5 dias ja fiz minhas 3 primeiras vendas. O dinheiro caiu direto. O dinheiro e abençoado!",
    time: "2h",
    likes: 47,
    replies: 3,
  },
  {
    name: "Thiago P.",
    handle: "@thiago.pmendes",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Mano, to usando pra video de futebol e ta vindo 1500 views por dia nessa semana. To chocado como funciona pra qualquer nicho",
    time: "5h",
    likes: 31,
    replies: 5,
  },
  {
    name: "Carla F.",
    handle: "@carlinhaf_",
    avatar: "https://i.pravatar.cc/150?img=9",
    text: "Meu marido achou que era golpe kkkk mas ja fiz R$ 420 em 12 dias. Ele que ta querendo aprender agora",
    time: "1d",
    likes: 89,
    replies: 7,
  },
  {
    name: "Lucas G.",
    handle: "@lucasgomes.ofc",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "Primeira vez que meu video passou de 500 visualizacoes no YouTube Shorts!! To no caminho certo, logo logo sai a primeira venda",
    time: "3h",
    likes: 22,
    replies: 1,
  },
  {
    name: "Sandra L.",
    handle: "@sandra.lopes22",
    avatar: "https://i.pravatar.cc/150?img=26",
    text: "Amei demais. Comecei usando pra videos de futebol e ta dando MUITO certo. Depois vou aplicar pra videos cristaos tambem, pois quero glorificar a Deus com isso",
    time: "10min",
    likes: 15,
    replies: 4,
  },
  {
    name: "Mario B.",
    handle: "@mariobernardes",
    avatar: "https://i.pravatar.cc/150?img=14",
    text: "To com mas sabe na MUfato laas! 220 reais! Chocada! Tudo pelo celular, facil demais",
    time: "1d",
    likes: 56,
    replies: 3,
  },
  {
    name: "Fernanda R.",
    handle: "@fefe_rocha",
    avatar: "https://i.pravatar.cc/150?img=25",
    text: "Gente eu to postando os videos de pregacao e ja tenho 1200 seguidores no insta em 8 dias!! Sem gastar nada. To muito feliz com o metodo",
    time: "6h",
    likes: 38,
    replies: 2,
  },
  {
    name: "Juliana P.",
    handle: "@juju.pferreira",
    avatar: "https://i.pravatar.cc/150?img=20",
    text: "Minha familia nao acreditava em mim, achavam que era besteira. Mas ja fiz duas vendas essa semana e agora minha mae ta me pedindo pra ensinar kkkk motivada demais",
    time: "4h",
    likes: 103,
    replies: 11,
  },
  {
    name: "Antonio C.",
    handle: "@tonhao.cardoso",
    avatar: "https://i.pravatar.cc/150?img=60",
    text: "Amei 150 reais! Episodio so do 2a da minha vida! Comecei semana passada e ja vi resultado",
    time: "1d",
    likes: 44,
    replies: 5,
  },
  {
    name: "Amanda R.",
    handle: "@amanda.rib3iro",
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "Gaxe usando pra videos de humor e pegadinha dessa vez e ta rendendo muito mais views. O metodo funciona pra qualquer tipo de conteudo mesmo",
    time: "7h",
    likes: 29,
    replies: 4,
  },
  {
    name: "Pedro V.",
    handle: "@pedroviana_",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "Faco tudo no celular, ate enquanto to no onibus indo pro trabalho. Super facil de aplicar. Minha primeira venda saiu ontem, to surreal!",
    time: "3d",
    likes: 67,
    replies: 6,
  },
  {
    name: "Rafaela T.",
    handle: "@rafa.teixeira",
    avatar: "https://i.pravatar.cc/150?img=44",
    text: "To usando 180 reais na primeira semana e ja entrou mais gente. O algoritmo ta empurrando meus videos demais",
    time: "8h",
    likes: 51,
    replies: 3,
  },
  {
    name: "Claiane M.",
    handle: "@clai_morais",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "Passei a vida fazendo video de pegadinhas kkkk e ta dando certo demais! Ja fiz 3 vendas em 6 dias. Quem diria ne",
    time: "2d",
    likes: 74,
    replies: 8,
  },
  {
    name: "Roberto N.",
    handle: "@beto.nasc",
    avatar: "https://i.pravatar.cc/150?img=53",
    text: "Sou motorista de caminhao e quando paro no posto de noite ja edito e posto meus cortes. Ja vi 3 mil views em um video. Seguimos firme",
    time: "12h",
    likes: 33,
    replies: 2,
  },
  {
    name: "Luiza B.",
    handle: "@lu.barros_",
    avatar: "https://i.pravatar.cc/150?img=45",
    text: "So com celular, sem investir nada. E inacreditavel! Meu TikTok ja tem 4800 seguidores e comecei tem 2 semanas. Deus e bom demais",
    time: "5h",
    likes: 82,
    replies: 9,
  },
  {
    name: "Wellington S.",
    handle: "@well.santos10",
    avatar: "https://i.pravatar.cc/150?img=57",
    text: "Cara eu desconfiava muito de curso online. Mas vi que tinha garantia de 7 dias e pensei: se nao prestar peço reembolso. Resultado: ja to no lucro e nem pensei em pedir kkkk",
    time: "1d",
    likes: 41,
    replies: 3,
  },
  {
    name: "Priscila D.",
    handle: "@prii.dias",
    avatar: "https://i.pravatar.cc/150?img=23",
    text: "To usando pra videos cristao e videos de curiosidades. Minha pagina de curiosidades ja tem mais engajamento que a outra. Vou focar nas duas. Muito grata pelo metodo",
    time: "9h",
    likes: 27,
    replies: 1,
  },
  {
    name: "Josue A.",
    handle: "@josue.almeida",
    avatar: "https://i.pravatar.cc/150?img=59",
    text: "Tava desempregado a 4 meses e minha esposa tava desacreditada. Ontem fiz minha primeira venda e ela chorou comigo. Deus usa quem quer. Obrigado metodo",
    time: "16h",
    likes: 156,
    replies: 14,
  },
  {
    name: "Tatiane O.",
    handle: "@tati.oliveiira",
    avatar: "https://i.pravatar.cc/150?img=41",
    text: "O mais legal e que da pra fazer tudo pelo celular mesmo! Eu achava que precisava de computador. To editando os cortes no intervalo do almoco no trabalho",
    time: "2d",
    likes: 35,
    replies: 2,
  },
  {
    name: "Carlos E.",
    handle: "@carlosedu.dev",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "Comecei com videos de motivacao e ja to com 7200 seguidores no instagram. Minha meta e chegar em 10k esse mes pra ativar o link nos stories. Metodo top demais, recomendo",
    time: "3h",
    likes: 63,
    replies: 5,
  },
]

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? comments : comments.slice(0, 6)

  return (
    <div className="w-full max-w-[800px] mx-auto px-4">
      <h2 className="text-white font-serif text-xl md:text-2xl font-bold mb-6 text-center">
        Resultados Reais de Alunos:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {visible.map((c, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-[#222222] rounded-xl p-4"
          >
            <div className="flex items-start gap-3">
              <img
                src={c.avatar}
                alt={`Foto de ${c.name}`}
                className="w-10 h-10 rounded-full object-cover shrink-0"
                crossOrigin="anonymous"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">{c.name}</span>
                  <span className="text-[#555555] text-xs">{c.handle}</span>
                </div>
                <p className="text-[#cccccc] text-sm leading-relaxed mt-1.5">
                  {c.text}
                </p>
                <div className="flex items-center gap-4 mt-3 text-[#555555]">
                  <span className="text-xs">{c.time}</span>
                  <button className="flex items-center gap-1 text-xs hover:text-[#e02020] transition-colors cursor-default">
                    <Heart className="w-3.5 h-3.5" />
                    {c.likes}
                  </button>
                  <button className="flex items-center gap-1 text-xs cursor-default">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {c.replies}
                  </button>
                  <span className="text-xs ml-auto">Responder</span>
                </div>
              </div>
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

      <div className="mt-4 border-t border-[#1a1a1a] pt-4">
        <div className="flex items-center gap-3 px-1">
          <div className="w-8 h-8 rounded-full bg-[#222222]" />
          <div className="flex-1 bg-[#111111] border border-[#222222] rounded-full px-4 py-2.5">
            <span className="text-[#444444] text-sm">Adicionar um comentario...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

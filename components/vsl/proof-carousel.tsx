"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const proofImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce4c6500d21aaab4b088e3e2bb3ebbdc-qAeg8DzLrgVVKfrTtRAoNnQBMNgEN6.jpg",
    alt: "Receita de R$ 3.845 em 7 dias",
    caption: "R$ 3.845 em apenas 7 dias",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/647e857042aa5b05d91e22fe3f0f9a96-CRU6MNm2jcn21NVW4ZEIE2CHgX1N5n.jpg",
    alt: "Receita de R$ 1.978 em 7 dias",
    caption: "R$ 1.978 em 7 dias",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e140444db2d3f9644ab1a80aa6b370fe-vDk5DSpO9Yzt0ctnNJz2W5631TC77O.jpg",
    alt: "Notificacoes de vendas na Cakto",
    caption: "Vendas caindo uma atras da outra",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d5f02bae4aa495002a857b1793075808-GdDOCp0PBp6EdaUJ62cHSrnSHiGSiR.jpg",
    alt: "Notificacoes de vendas na Braip",
    caption: "Comissoes de R$ 172 a R$ 394 por venda",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comissao%20de%20110%20que%20veio%20do%20story%20do%20pastor%20-%20prova%20social.PNG-JD7QTPi1O9nxCRQzqkfjo3zat4ejm4.png",
    alt: "Comissao de R$ 110 via Pix",
    caption: "R$ 110 de comissao caiu via Pix",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/975237755-kiwify-notificacao-fake-XS1Z%20%281%29-OsojxEeo00LH1GtYwkda1H78sqj4Ie.webp",
    alt: "Vendas aprovadas na Kiwify",
    caption: "Vendas de R$ 45 a R$ 335 na Kiwify",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/story%20com%20a%20legenda%20pra%20cta%20-%20prova%20social-jgjprGf151K3CWMpOjHWj8voMDAZso.png",
    alt: "Corte de pastor com legenda e CTA nos stories",
    caption: "Corte de pastor com legenda estrategica",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/story%20que%20eu%20postei%20no%20instagram%20e%20fez%20a%20pessoa%20comprar-xGgPcujkfwM96i7pyFRmOJv7A7XMCu.png",
    alt: "Story postado no Instagram que gerou venda",
    caption: "Story que gerou venda real",
  },
]

export function ProofCarousel() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<ReturnType<typeof setInterval>>()

  const goTo = useCallback((index: number) => {
    const clamped = ((index % proofImages.length) + proofImages.length) % proofImages.length
    setCurrent(clamped)
    if (trackRef.current) {
      const child = trackRef.current.children[clamped] as HTMLElement
      if (child) {
        trackRef.current.scrollTo({
          left: child.offsetLeft - trackRef.current.offsetWidth / 2 + child.offsetWidth / 2,
          behavior: "smooth",
        })
      }
    }
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 4000)
    return () => clearInterval(autoplayRef.current)
  }, [next])

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(next, 4000)
  }

  return (
    <div className="w-full">
      <h3 className="text-[#111111] font-bold text-lg sm:text-xl mb-2 font-serif uppercase tracking-tight text-center">
        Resultados Reais de Pessoas Comuns
      </h3>
      <p className="text-[#666666] text-xs sm:text-sm text-center mb-5">
        Nao sao promessas. Sao capturas de tela de quem ja esta aplicando.
      </p>

      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={() => { prev(); resetAutoplay() }}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 border border-[#e5e5e5] rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" />
        </button>
        <button
          onClick={() => { next(); resetAutoplay() }}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 border border-[#e5e5e5] rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
          aria-label="Proximo"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-8 sm:px-12 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {proofImages.map((img, i) => (
            <div
              key={i}
              className={`shrink-0 w-[240px] sm:w-[280px] snap-center transition-all duration-300 ${
                i === current ? "scale-100 opacity-100" : "scale-95 opacity-60"
              }`}
              onClick={() => { goTo(i); resetAutoplay() }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl border border-[#e5e5e5] shadow-md"
                loading="lazy"
              />
              <p className="text-[#555555] text-[11px] sm:text-xs text-center mt-2 font-medium">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {proofImages.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAutoplay() }}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "w-6 h-2 bg-[#e02020]"
                  : "w-2 h-2 bg-[#d1d5db] hover:bg-[#9ca3af]"
              }`}
              aria-label={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <p className="text-[#888888] text-[10px] sm:text-xs text-center mt-4 leading-relaxed max-w-[400px] mx-auto">
        Prints reais de plataformas de afiliacao (Kiwify, Braip, Cakto). Resultados variam de pessoa pra pessoa.
      </p>
    </div>
  )
}

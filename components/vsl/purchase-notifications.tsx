"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle } from "lucide-react"

const buyers = [
  { name: "Rodrigo S.", city: "Sao Paulo, SP" },
  { name: "Amanda L.", city: "Rio de Janeiro, RJ" },
  { name: "Pedro H.", city: "Belo Horizonte, MG" },
  { name: "Camila R.", city: "Curitiba, PR" },
  { name: "Lucas M.", city: "Salvador, BA" },
  { name: "Fernanda A.", city: "Fortaleza, CE" },
  { name: "Thiago B.", city: "Brasilia, DF" },
  { name: "Bruna P.", city: "Manaus, AM" },
  { name: "Gabriel N.", city: "Goiania, GO" },
  { name: "Isabela F.", city: "Recife, PE" },
  { name: "Matheus D.", city: "Porto Alegre, RS" },
  { name: "Larissa V.", city: "Campinas, SP" },
  { name: "Rafael C.", city: "Florianopolis, SC" },
  { name: "Natalia O.", city: "Belem, PA" },
  { name: "Diego T.", city: "Vitoria, ES" },
  { name: "Aline G.", city: "Natal, RN" },
  { name: "Vinicius J.", city: "Campo Grande, MS" },
  { name: "Mariana K.", city: "Joao Pessoa, PB" },
  { name: "Felipe E.", city: "Maceio, AL" },
  { name: "Priscila W.", city: "Sao Luis, MA" },
]

interface PurchaseNotificationsProps {
  active: boolean
}

export function PurchaseNotifications({ active }: PurchaseNotificationsProps) {
  const [currentNotification, setCurrentNotification] = useState<typeof buyers[0] | null>(null)
  const [visible, setVisible] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    if (!active) return

    const showNotification = () => {
      const buyer = buyers[indexRef.current % buyers.length]
      setCurrentNotification(buyer)
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 4000)

      indexRef.current += 1
    }

    // Show first one after a small delay
    const firstTimeout = setTimeout(showNotification, 1500)

    // Then every 17 seconds
    const interval = setInterval(showNotification, 17000)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [active])

  if (!active || !currentNotification) return null

  return (
    <div
      className={`fixed bottom-3 left-3 right-3 sm:right-auto sm:left-4 sm:bottom-4 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 sm:translate-x-0 opacity-100"
          : "translate-y-full sm:translate-y-0 sm:-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white border border-[#e5e5e5] rounded-lg p-3 flex items-center gap-3 shadow-2xl shadow-black/10 sm:max-w-[340px]">
        <div className="w-10 h-10 rounded-full bg-[#0d7c3d]/20 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
        </div>
        <div className="min-w-0">
          <p className="text-[#111111] text-sm font-semibold truncate">
            {currentNotification.name}
          </p>
          <p className="text-[#888888] text-xs truncate">
            {currentNotification.city}
          </p>
          <p className="text-[#22c55e] text-xs font-medium mt-0.5">
            Acabou de obter as gravacoes
          </p>
        </div>
      </div>
    </div>
  )
}

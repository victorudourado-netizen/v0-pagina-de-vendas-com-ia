"use client"

import { useEffect, useState } from "react"

export function LiveCounter() {
  const [count, setCount] = useState(39)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newCount = prev + change
        return Math.max(31, Math.min(58, newCount))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e02020] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e02020]" />
      </span>
      <span className="text-[#e02020] text-sm font-semibold">
        {count} pessoas assistindo agora
      </span>
    </div>
  )
}

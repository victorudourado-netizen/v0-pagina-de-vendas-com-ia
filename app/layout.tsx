import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Descubra Como Ganhar Dinheiro Postando Videos Pelo Celular',
  description: 'Metodo simples para ganhar de R$ 100 a R$ 300 por dia postando cortes de videos pelo celular. Sem aparecer, sem investir nada, 100% organico.',
  robots: 'noindex, nofollow',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

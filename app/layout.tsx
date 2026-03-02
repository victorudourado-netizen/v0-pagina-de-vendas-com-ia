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
  title: 'Motorista de App Revela Como Fez R$ 1.300 em 7 Dias Postando Cortes Cristaos',
  description: 'Veja como um motorista de Uber pagou as contas do mes postando cortes de videos cristaos pelo celular. Metodo 100% organico, sem aparecer, sem gastar nada.',
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

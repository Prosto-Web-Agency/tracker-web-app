import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/store/provider'
import 'animate.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRAKER STATS',
  description: 'from REC\'s community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
    </head>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}

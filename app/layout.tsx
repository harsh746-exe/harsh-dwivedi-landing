import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harsh Dwivedi - Software & AI Engineer',
  description: 'M.S. Computer Engineering student at Syracuse University, passionate about backend engineering, AI/ML, and building scalable systems.',
  keywords: ['Harsh Dwivedi', 'Software Engineer', 'AI Engineer', 'Computer Engineering', 'Syracuse University'],
  authors: [{ name: 'Harsh Dwivedi' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Harsh Dwivedi - Software & AI Engineer',
    description: 'M.S. Computer Engineering student at Syracuse University, passionate about backend engineering, AI/ML, and building scalable systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
          defer 
          data-domain="yourdomain.com" 
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

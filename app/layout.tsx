import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FamJamJam - Connect with Families Nearby',
  description: 'Join local groups, attend family events, and build meaningful connections in your neighborhood',
  keywords: 'family groups, local events, community, parenting, playdates, Bengaluru families',
  authors: [{ name: 'FamJamJam' }],
  creator: 'FamJamJam',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://famjamjam.com',
    siteName: 'FamJamJam',
    title: 'FamJamJam - Connect with Families Nearby',
    description: 'Join local groups, attend family events, and build meaningful connections',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FamJamJam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FamJamJam - Connect with Families Nearby',
    description: 'Join local groups, attend family events, and build meaningful connections',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

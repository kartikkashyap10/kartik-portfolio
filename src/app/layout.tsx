import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kartik Kashyap - Senior Software Engineer',
  description: 'Senior Software Engineer with 4 years of experience in full-stack development, specializing in Node.js, React, TypeScript, and cloud technologies.',
  keywords: 'Kartik Kashyap, Software Engineer, Full Stack Developer, Node.js, React, TypeScript, AWS, Azure',
  authors: [{ name: 'Kartik Kashyap' }],
  openGraph: {
    title: 'Kartik Kashyap - Senior Software Engineer',
    description: 'Senior Software Engineer with 3+ years of experience in full-stack development',
    url: 'https://your-portfolio-url.vercel.app',
    siteName: 'Kartik Kashyap Portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
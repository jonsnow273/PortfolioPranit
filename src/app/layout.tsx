import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranit Bharat More - AI & Machine Learning Student',
  description: '18-year-old AI/ML diploma student at RIT Pune, building full-stack AI-powered tools and ML projects.',
  keywords: ['AI', 'Machine Learning', 'Full-Stack Developer', 'React', 'Python', 'Portfolio'],
  authors: [{ name: 'Pranit Bharat More' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
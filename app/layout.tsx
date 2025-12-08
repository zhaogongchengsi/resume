import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zhaozunhong',
  description: 'Hello, if you can find this, it means we are destined to meet.',
  keywords: ['zhaozunhong', 'Resume', 'ZZH Resume', 'blog', 'zzh blog', 'Vue', 'React', 'Web Development', 'open source development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

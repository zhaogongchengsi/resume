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
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const theme = localStorage.getItem('theme');
                  if (theme) {
                    return theme;
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                
                const theme = getTheme();
                document.documentElement.classList.toggle('dark', theme === 'dark');
                
                // 监听系统主题变化
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                  if (!localStorage.getItem('theme')) {
                    document.documentElement.classList.toggle('dark', e.matches);
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

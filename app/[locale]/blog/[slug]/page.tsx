import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ThemeToggle } from '@/app/components/ThemeToggle'
import { LanguageToggle } from '@/app/components/LanguageToggle'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

interface Props {
  params: Promise<{ slug: string; locale: string }>
}


export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const t = await getTranslations('blog')

  // 动态导入 MDX 文件
  let MDXContent
  try {
    MDXContent = (await import(`@/content/${slug}.mdx`)).default
    console.log({MDXContent})
  } catch (error) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#161616]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="text-sm text-[#666] hover:text-[#333] dark:text-[#999] dark:hover:text-[#bdc1c6] transition-colors"
            >
              ← {t('backToBlog')}
            </Link>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXContent />
        </article>
      </div>
    </div>
  )
}

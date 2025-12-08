import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ThemeToggle } from '@/app/components/ThemeToggle'
import { LanguageToggle } from '@/app/components/LanguageToggle'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

interface BlogPostMeta {
  title: string
  date: string
  description: string
}

const posts: Record<string, BlogPostMeta> = {
  onion: {
    title: '使用JavaScript实现简单洋葱模型的记录',
    date: '2024-01-15',
    description: '洋葱模型是一种中间件的设计模式，它的核心思想是将各种操作的处理分为前置处理、后置处理和中间处理三个阶段',
  },
  unasarmor: {
    title: '如何破解 asarmor 打包后的 asar 文件',
    date: '2024-02-20',
    description: '在使用 electron 打包项目时，我们通常会使用 asarmor 来加密 asar 文件，但是在某些情况下，我们需要对 asar 文件进行还原',
  },
}

export async function generateStaticParams() {
  const locales = ['zh', 'en']
  const slugs = Object.keys(posts)
  
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Zhaozunhong`,
    description: post.description,
    keywords: [post.title, 'blog', 'zhaozunhong', 'programming', 'web development'],
    authors: [{ name: 'Zhaozunhong' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  const t = await getTranslations('blog')

  if (!post) {
    notFound()
  }

  // 动态导入 MDX 文件
  let MDXContent
  try {
    MDXContent = (await import(`@/content/${slug}.mdx`)).default
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
          
          {/* <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-[#333] dark:text-[#bdc1c6]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#999] dark:text-[#666]">
              <time>{post.date}</time>
            </div>
            <p className="mt-4 text-[#666] dark:text-[#999] leading-relaxed">
              {post.description}
            </p>
          </div> */}
        </header>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXContent />
        </article>
      </div>
    </div>
  )
}

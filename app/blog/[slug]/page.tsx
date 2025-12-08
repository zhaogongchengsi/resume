import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs } from '@/app/lib/posts'
import Link from 'next/link'
import { ThemeToggle } from '@/app/components/ThemeToggle'
import { MarkdownContent } from '@/app/components/MarkdownContent'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

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
  const post = getPostBySlug(slug)

  if (!post) {
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
              ← 返回博客列表
            </Link>
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#333] dark:text-[#bdc1c6]">
            {post.title}
          </h1>
          <time className="text-sm text-[#999] dark:text-[#666]">{post.date}</time>
        </header>

        <article className="prose prose-zinc dark:prose-invert max-w-none prose-pre:bg-[#f5f5f5] dark:prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-[#e5e5e5] dark:prose-pre:border-[#333]">
          <MarkdownContent content={post.content} />
        </article>
      </div>
    </div>
  )
}

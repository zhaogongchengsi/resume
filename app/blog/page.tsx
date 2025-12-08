import Link from 'next/link'

const blogPosts = [
  {
    id: 'onion',
    title: '使用JavaScript实现简单洋葱模型的记录',
    description: '洋葱模型是一种中间件的设计模式，它的核心思想是将各种操作的处理分为前置处理、后置处理和中间处理三个阶段。',
    date: '2024',
  },
  {
    id: 'unasarmor',
    title: '如何破解 asarmor 打包后的 asar 文件',
    description: '在使用 electron 打包项目时，我们通常会使用 asarmor 来加密 asar 文件，本文介绍如何对其进行还原。',
    date: '2024',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#161616]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="text-sm text-[#666] hover:text-[#333] dark:text-[#999] dark:hover:text-[#bdc1c6] transition-colors"
            >
              ← 返回首页
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#333] dark:text-[#bdc1c6]">博客</h1>
          <p className="text-[#666] dark:text-[#999]">记录技术学习与思考</p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="border-b border-[#e5e5e5] dark:border-[#333] pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.id}`} className="group block">
                <h2 className="text-2xl font-semibold mb-3 text-[#333] dark:text-[#bdc1c6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#666] dark:text-[#999] mb-3 leading-relaxed">
                  {post.description}
                </p>
                <time className="text-sm text-[#999] dark:text-[#666]">{post.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

import { MetadataRoute } from 'next'

const posts: Record<string, any> = {
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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'zhaozunhong.me' // 替换为你的域名

  const blogRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogRoutes,
  ]
}

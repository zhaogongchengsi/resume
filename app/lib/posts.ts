import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // 从内容中提取标题和描述
      const lines = content.trim().split('\n')
      const title = lines[0]?.replace(/^#\s*/, '') || slug
      const description = lines
        .slice(1)
        .find((line) => line.trim() && !line.startsWith('#'))
        ?.substring(0, 150) || ''

      return {
        slug,
        title,
        description,
        date: data.date || '2024',
        content,
      }
    })

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const lines = content.trim().split('\n')
    const title = lines[0]?.replace(/^#\s*/, '') || slug
    const description = lines
      .slice(1)
      .find((line) => line.trim() && !line.startsWith('#'))
      ?.substring(0, 150) || ''

    return {
      slug,
      title,
      description,
      date: data.date || '2024',
      content,
    }
  } catch (error) {
    return null
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }))
}

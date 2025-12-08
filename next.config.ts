import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // SEO 优化
  poweredByHeader: false,
  compress: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withNextIntl(withMDX(nextConfig))

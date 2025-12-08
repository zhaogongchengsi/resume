import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  // SEO 优化
  poweredByHeader: false,
  compress: true,
  // 生成静态页面
  output: 'standalone',
}

export default nextConfig

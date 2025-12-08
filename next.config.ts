import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
}

export default nextConfig

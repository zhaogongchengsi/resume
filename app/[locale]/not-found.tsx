'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#161616]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-[#333] dark:text-[#bdc1c6]">404</h1>
        <h2 className="text-2xl mb-6 text-[#666] dark:text-[#999]">{t('title')}</h2>
        <p className="text-[#999] dark:text-[#666] mb-8">
          {t('description')}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 bg-[#1a73e8] text-white rounded font-medium text-sm hover:bg-[#1765cc] transition-colors"
          >
            {t('backHome')}
          </Link>
          <Link
            href="/blog"
            className="px-6 py-2.5 border border-[#e5e5e5] dark:border-[#333] text-[#333] dark:text-[#bdc1c6] rounded font-medium text-sm hover:bg-[#f5f5f5] dark:hover:bg-[#2d2e30] transition-colors"
          >
            {t('viewBlog')}
          </Link>
        </div>
      </div>
    </div>
  )
}

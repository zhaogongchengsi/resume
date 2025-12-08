'use client'

import { useLocale } from 'next-intl'
import { useTransition } from 'react'

export function LanguageToggle() {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const toggleLanguage = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh'
    
    startTransition(() => {
      // Store locale preference
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
      // Reload to apply new locale
      window.location.reload()
    })
  }

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="px-3 py-2 rounded-lg border border-[#e5e5e5] dark:border-[#333] hover:bg-[#f5f5f5] dark:hover:bg-[#2d2e30] transition-colors font-medium text-sm disabled:opacity-50"
      aria-label="切换语言"
    >
      {locale === 'zh' ? 'EN' : '中文'}
    </button>
  )
}

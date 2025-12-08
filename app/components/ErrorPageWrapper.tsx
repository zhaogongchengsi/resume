'use client'

import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

export function ErrorPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {children}
    </>
  )
}

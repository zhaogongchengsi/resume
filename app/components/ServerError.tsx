'use client'

import { ReloadButton } from './InteractiveButtons'
import { useTranslations } from 'next-intl'
import { ErrorPageWrapper } from './ErrorPageWrapper'

export default function ServerError() {
  const t = useTranslations('serverError')

  return (
    <ErrorPageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#202124]">
        <div className="text-center max-w-[600px] px-5 py-10">
          <div className="mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="mx-auto">
              <path fill="#999" d="M13 13v-2h-2v2m0 4v-2h-2v2M1 21h22L12 2"/>
            </svg>
          </div>
          <h1 className="text-7xl font-light mb-2.5 text-[#999]">500</h1>
          <h2 className="text-2xl font-normal mb-4 text-[#333] dark:text-[#bdc1c6]">{t('title')}</h2>
          <p className="text-sm leading-relaxed mb-3 text-[#333] dark:text-[#bdc1c6]">
            {t('description')}
          </p>
          <p className="text-[#999] text-[13px] mt-5">
            {t('detail')}
          </p>
          <div className="mt-8">
            <ReloadButton />
          </div>
        </div>
      </div>
    </ErrorPageWrapper>
  )
}

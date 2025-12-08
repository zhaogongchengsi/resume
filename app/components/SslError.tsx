'use client'

import DomainDisplay from './DomainDisplay'
import { AdvancedSection } from './SslInteractive'
import { useTranslations } from 'next-intl'
import { ErrorPageWrapper } from './ErrorPageWrapper'

export default function SslError() {
  const t = useTranslations('sslError')

  return (
    <ErrorPageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#202124]">
        <div className="text-left max-w-[600px] px-5 py-10">
          <div className="text-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="mx-auto">
              <path fill="#d93025" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"/>
            </svg>
          </div>
          <h1 className="text-2xl font-normal mb-5 text-[#d93025] dark:text-[#f28b82]">
            {t('title')}
          </h1>
          <p className="text-sm leading-relaxed mb-3 text-[#333] dark:text-[#bdc1c6]">
            {t('description', {domain: ''})} <strong><DomainDisplay /></strong>
          </p>
          <p className="text-xs text-[#999] mt-5 font-mono">{t('errorCode')}</p>
          <AdvancedSection />
        </div>
      </div>
    </ErrorPageWrapper>
  )
}

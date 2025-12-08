'use client'

import DomainDisplay from './DomainDisplay'
import { ReloadButton } from './InteractiveButtons'
import { useTranslations } from 'next-intl'
import { ErrorPageWrapper } from './ErrorPageWrapper'

export default function DnsError() {
  const t = useTranslations('dnsError')

  return (
    <ErrorPageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#202124]">
        <div className="text-left max-w-[600px] px-5 py-10">
          <div className="text-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="mx-auto">
              <path fill="#999" d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3h-1v2h1c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73L4.27 4L3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
            </svg>
          </div>
          <h1 className="text-[22px] font-normal mb-4 leading-snug text-[#333] dark:text-[#bdc1c6]">
            {t('title', {domain: ''})}
          </h1>
          <p className="text-sm leading-relaxed mb-3 text-[#999] font-mono">
            {t('errorCode')}
          </p>
          <div className="my-8">
            <p className="font-medium mb-3 text-sm text-[#333] dark:text-[#bdc1c6]">{t('suggestions')}</p>
            <ul className="list-disc pl-8 m-0">
              <li className="mb-2 text-sm text-[#333] dark:text-[#bdc1c6]">
                {t('checkTypos')} <strong><DomainDisplay /></strong>
              </li>
              <li className="mb-2 text-sm text-[#333] dark:text-[#bdc1c6]">
                {t('checkConnection')}
              </li>
              <li className="mb-2 text-sm text-[#333] dark:text-[#bdc1c6]">
                {t('checkDns')}
              </li>
            </ul>
          </div>
          <ReloadButton />
        </div>
      </div>
    </ErrorPageWrapper>
  )
}

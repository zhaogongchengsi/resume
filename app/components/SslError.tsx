import DomainDisplay from './DomainDisplay'
import { AdvancedSection } from './SslInteractive'

export default function SslError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#202124]">
      <div className="text-left max-w-[600px] px-5 py-10">
        <div className="text-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="mx-auto">
            <path fill="#d93025" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"/>
          </svg>
        </div>
        <h1 className="text-2xl font-normal mb-5 text-[#d93025] dark:text-[#f28b82]">
          您的连接不是私密连接
        </h1>
        <p className="text-sm leading-relaxed mb-3 text-[#333] dark:text-[#bdc1c6]">
          攻击者可能会试图从 <strong><DomainDisplay /></strong> 窃取您的信息（例如：密码、通讯内容或信用卡信息）。了解详情
        </p>
        <p className="text-xs text-[#999] mt-5 font-mono">NET::ERR_CERT_COMMON_NAME_INVALID</p>
        <AdvancedSection />
      </div>
    </div>
  )
}

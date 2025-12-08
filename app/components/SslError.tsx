'use client'

import { useEffect, useState } from 'react'

export default function SslError() {
  const [domain, setDomain] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  useEffect(() => {
    setDomain(window.location.hostname)
  }, [])

  const goBack = () => {
    window.history.back()
  }

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
          攻击者可能会试图从 <strong>{domain}</strong> 窃取您的信息（例如：密码、通讯内容或信用卡信息）。了解详情
        </p>
        <p className="text-xs text-[#999] mt-5 font-mono">NET::ERR_CERT_COMMON_NAME_INVALID</p>
        <div className="mt-8 flex gap-3">
          <button
            onClick={goBack}
            className="px-6 py-2.5 bg-[#1a73e8] text-white border-none rounded font-medium text-sm cursor-pointer hover:bg-[#1765cc]"
          >
            返回
          </button>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="px-6 py-2.5 bg-transparent text-[#1a73e8] dark:text-[#8ab4f8] border border-[#dadce0] dark:border-[#5f6368] rounded font-medium text-sm cursor-pointer hover:bg-[#f8f9fa] dark:hover:bg-[#2d2e30]"
          >
            高级
          </button>
        </div>
        {showAdvanced && (
          <div className="mt-5 p-4 bg-[#fef7e0] dark:bg-[#3c3020] border-l-4 border-[#f9ab00] text-[13px] leading-relaxed text-[#333] dark:text-[#bdc1c6]">
            <p>
              此服务器无法证明它是 <strong>{domain}</strong>；您计算机的操作系统不信任其安全证书。这可能是因为配置有误或攻击者拦截了您的连接。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

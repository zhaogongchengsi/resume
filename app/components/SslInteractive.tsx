'use client'

import { useState } from 'react'
import DomainDisplay from './DomainDisplay'

export function AdvancedSection() {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const goBack = () => {
    window.history.back()
  }

  return (
    <>
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
            此服务器无法证明它是 <strong><DomainDisplay /></strong>；您计算机的操作系统不信任其安全证书。这可能是因为配置有误或攻击者拦截了您的连接。
          </p>
        </div>
      )}
    </>
  )
}

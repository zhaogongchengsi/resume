'use client'

import { useEffect, useState } from 'react'

export default function NetworkError() {
  const [domain, setDomain] = useState('')

  useEffect(() => {
    setDomain(window.location.hostname)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#202124]">
      <div className="text-left max-w-[600px] px-5 py-10">
        <div className="text-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" className="mx-auto">
            <path fill="#999" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/>
          </svg>
        </div>
        <h1 className="text-2xl font-normal mb-4 text-[#333] dark:text-[#bdc1c6]">无法访问此网站</h1>
        <p className="text-sm leading-relaxed mb-3 text-[#333] dark:text-[#bdc1c6]">
          <strong>{domain}</strong> 的响应时间过长。
        </p>
        <div className="my-8 p-5 bg-[#f5f5f5] dark:bg-[#2d2e30] rounded">
          <p className="font-medium mb-3 text-sm text-[#333] dark:text-[#bdc1c6]">请试试以下办法：</p>
          <ul className="list-disc pl-8 m-0">
            <li className="mb-2 text-sm text-[#333] dark:text-[#bdc1c6]">检查网络连接</li>
            <li className="mb-2 text-sm text-[#333] dark:text-[#bdc1c6]">检查代理服务器和防火墙</li>
            <li className="mb-2 text-sm text-[#333] dark:text-[#bdc1c6]">运行 Windows 网络诊断</li>
          </ul>
        </div>
        <p className="text-xs text-[#999] dark:text-[#666] mt-8 font-mono">ERR_CONNECTION_TIMED_OUT</p>
      </div>
    </div>
  )
}

import DomainDisplay from './DomainDisplay'

export default function Chrome404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#202124]">
      <div className="text-center max-w-[600px] px-5 py-10">
        <div className="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="mx-auto">
            <path fill="#999" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        <h1 className="text-2xl font-normal mb-4 text-[#333] dark:text-[#bdc1c6]">此网页无法正常运作</h1>
        <p className="text-sm leading-relaxed mb-3 text-[#333] dark:text-[#bdc1c6]">
          <strong><DomainDisplay /></strong> 目前无法处理此请求。
        </p>
        <p className="text-xs text-[#999] dark:text-[#666] mt-8">HTTP ERROR 404</p>
      </div>
    </div>
  )
}

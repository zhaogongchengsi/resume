'use client'

export function ReloadButton() {
  const reload = () => {
    window.location.reload()
  }

  return (
    <button
      onClick={reload}
      className="mt-5 px-6 py-2.5 bg-[#1a73e8] text-white border-none rounded font-medium text-sm cursor-pointer hover:bg-[#1765cc]"
    >
      重新加载
    </button>
  )
}

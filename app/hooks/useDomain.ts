'use client'

import { useEffect, useState } from 'react'

export function useDomain() {
  const [domain, setDomain] = useState('')

  useEffect(() => {
    setDomain(window.location.hostname)
  }, [])

  return domain
}

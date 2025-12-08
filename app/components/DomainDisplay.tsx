'use client'

import { useDomain } from '../hooks/useDomain'

export default function DomainDisplay() {
  const domain = useDomain()
  return <>{domain || 'localhost'}</>
}

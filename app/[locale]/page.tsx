"use client"

import { useState, useEffect } from 'react'
import Chrome404 from '../components/Chrome404'
import NetworkError from '../components/NetworkError'
import DnsError from '../components/DnsError'
import SslError from '../components/SslError'
import ServerError from '../components/ServerError'

const errorComponents = [
  Chrome404,
  NetworkError,
  DnsError,
  SslError,
  ServerError
]

export default function Home() {
  const [ErrorComponent, setErrorComponent] = useState<typeof Chrome404 | null>(null)

  useEffect(() => {
    // 在客户端随机选择一个错误页面
    const randomIndex = Math.floor(Math.random() * errorComponents.length)
    setErrorComponent(() => errorComponents[randomIndex])
  }, [])

  if (!ErrorComponent) {
    return null
  }

  return <ErrorComponent />
}

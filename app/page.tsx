import Chrome404 from './components/Chrome404'
import NetworkError from './components/NetworkError'
import DnsError from './components/DnsError'
import SslError from './components/SslError'
import ServerError from './components/ServerError'

const errorComponents = [
  Chrome404,
  NetworkError,
  DnsError,
  SslError,
  ServerError
]

export default function Home() {
  // 在服务端随机选择一个错误页面
  const randomIndex = Math.floor(Math.random() * errorComponents.length)
  const ErrorComponent = errorComponents[randomIndex]

  return <ErrorComponent />
}

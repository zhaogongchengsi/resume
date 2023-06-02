import { GITHUB_API } from '~/constants'

// 获取仓库内容
export function assembleGithubRepoContentUrl(name: string, repo: string, path: string) {
  return `${GITHUB_API}/repos/${name}/${repo}/contents/${path}`
}

// 获取仓库信息
export function assembleGithubRepoUrl(name: string, repo: string) {
  return `${GITHUB_API}/repos/${name}/${repo}`
}

// 获取仓库语言以及行数
export function assembleGithubRepolanguages(name: string, repo: string) {
  return `${GITHUB_API}/repos/${name}/${repo}/languages`
}

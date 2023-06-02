import { assembleGithubRepoContentUrl, assembleGithubRepoUrl, assembleGithubRepolanguages } from './assemble'
import { getGitHub } from './request'
import type { GitHubRepoInfo } from '~/types'
import { useResume } from '~/composables/resume'

export async function useRepositories() {
  const { repositories } = useResume().github

  const response = []
  for (const repo of repositories || []) {
    if (repo.trim().length < 1)
      continue
    const info = await getGitHubRepoInfo(repo)
    response.push({ repository: repo, ...info })
  }

  return response
}

export async function getGitHubRepoReadmeContent(repo: string) {
  const { name } = useResume().github
  const res: any = await getGitHub(assembleGithubRepoContentUrl(name, repo, 'README.md'))
  // eslint-disable-next-line n/prefer-global/buffer
  return Buffer.from(res.content, 'base64').toString()
}

export async function getGitHubRepoInfo(repo: string): Promise<GitHubRepoInfo> {
  const { name } = useResume().github
  const res: any = await getGitHub(assembleGithubRepoUrl(name, repo))

  return {
    description: res.description,
    language: res.language,
    link: res.html_url,
    homepage: res.homepage,
  }
}

export async function getGitHubRepolanguages(repo: string): Promise<Record<string, number>> {
  const { name } = useResume().github
  const res: any = await getGitHub(assembleGithubRepolanguages(name, repo))
  return res
}

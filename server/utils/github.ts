import { assembleGithubRepoContentUrl, assembleGithubRepoUrl, assembleGithubRepolanguages } from './assemble'
import { getGitHub } from './request'
import { useResume } from '~/composables/resume'

export async function useRepositories() {
  const { repositories } = useResume().github

  const response = []
  for (const repo of repositories || []) {
    const readmeContent = await getGitHubRepoReadmeContent(repo)
    const info = await getGitHubRepoInfo(repo)
    const languages = await getGitHubRepolanguages(repo)
    response.push({ repository: repo, readme: readmeContent, ...info, languages })
  }

  return response
}

export async function getGitHubRepoReadmeContent(repo: string) {
  const { name } = useResume().github
  const res: any = await getGitHub(assembleGithubRepoContentUrl(name, repo, 'README.md'))
  // eslint-disable-next-line n/prefer-global/buffer
  return Buffer.from(res.content, 'base64').toString()
}

export async function getGitHubRepoInfo(repo: string) {
  const { name } = useResume().github
  const res: any = await getGitHub(assembleGithubRepoUrl(name, repo))

  return {
    description: res.description,
    language: res.language,
  }
}

export async function getGitHubRepolanguages(repo: string): Promise<Record<string, number>> {
  const { name } = useResume().github
  const res: any = await getGitHub(assembleGithubRepolanguages(name, repo))
  return res
}

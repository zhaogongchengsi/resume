import { useResume } from '~/composables/resume'
import type { GitHubRepoInfo } from '~/types'

interface RepoResponse extends GitHubRepoInfo {
  repository: string
}

export default defineEventHandler(async () => {
  const { repositories } = useResume().github

  const response: RepoResponse[] = []
  for (const repo of repositories || []) {
    if (repo.trim().length < 1)
      continue
    // const info = await getGitHubRepoInfo(repo)
    response.push({ repository: repo, language: 'TypeScript', homepage: '#', description: `${repo} description`, link: '#' })
  }

  return response
})

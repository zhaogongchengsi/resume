import type { languages } from '~/types'
import { useResume } from '~/composables/resume'

const ls: languages[] = [{ TypeScript: 1231, JavaScript: 123 }, { TypeScript: 1231, Vue: 123, Css: 123 }, { Scss: 1231, JavaScript: 123 }]

export default defineEventHandler(async () => {
  const { repositories } = useResume().github

  const response: languages[] = []
  for (const repo of repositories || []) {
    if (repo.trim().length < 1)
      continue
    const info = await getGitHubRepolanguages(repo)
    response.push(info)
  }

  return statisticsLanguages(response)
})

function statisticsLanguages(ls: languages[]): languages {
  return ls.reduce((pre, cur) => {
    for (const [name, value] of Object.entries(cur)) {
      const old = Reflect.get(pre, name)
      if (old)
        Reflect.set(pre, name, old + value)

      else
        Reflect.set(pre, name, value)
    }
    return pre
  }, {})
}

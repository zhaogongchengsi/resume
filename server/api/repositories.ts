import { useRepositories } from '../utils/github'

export default defineEventHandler(async () => {
  const repos = await useRepositories()
  return repos
})

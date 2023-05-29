import { headers } from '~/constants'

export async function getGitHub(url: string) {
  return $fetch(url, {
    method: 'get',
    headers,
  })
}

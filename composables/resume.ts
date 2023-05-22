import type { Resume } from '~/types'

export function useResume(): Resume {
  const appConfig = useAppConfig()
  return appConfig as Resume
}

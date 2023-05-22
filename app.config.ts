import type { Resume } from './types'

const resume: Resume = {
  title: 'zhaogongchengsi',
  introduce: 'abc',
  avatar: '/vite.png',
  github: 'https://github.com/zhaogongchengsi/resume',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/zhaogongchengsi',
    },
  ],
}

export default defineAppConfig<{}>(resume)

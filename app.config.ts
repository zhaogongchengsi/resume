import type { Resume } from './types'

const resume: Resume = {
  title: 'Zunhong Zhao',
  avatar: '/vite.png',
  github: {
    link: 'https://github.com/zhaogongchengsi/resume',
    repositories: ['vite-plugin-pages-generate-router', 'zzh-vs-theme', 'create-electron-app', 'starter-vue', 'starter-gin'],
    name: 'zhaogongchengsi',
  },
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/zhaogongchengsi',
    },
  ],
  navbar: [
    {
      title: 'blog',
      link: '/article',
    },
    {
      title: 'projects',
      link: '/projects',
    },
  ],
}

export default defineAppConfig<{}>(resume)

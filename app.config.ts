import type { Resume } from './types'

const resume: Resume = {
  title: 'Zunhong Zhao',
  introduce: '一名普通的会写后端的前端开发',
  tags: ['前端开发', '切图仔', '后端开发', '接口开发者'],
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
      title: 'doubt',
      link: '#',
    },
  ],
}

export default defineAppConfig<{}>(resume)

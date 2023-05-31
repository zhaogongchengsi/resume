<script setup lang='ts'>
import type { RepoResponse } from '~/types'
import LangConfigs from '~/constants/languages'

const { repo } = withDefaults(defineProps< { repo?: Partial<RepoResponse> } >(), { repo: () => ({ description: '', homepage: '/', repository: '', language: 'JavaScript', link: '/' }) })

const github = useResume().github

const link = computed(() => {
  if (repo.homepage?.startsWith('http'))
    return repo.homepage

  else if (repo.link?.startsWith('http'))
    return repo.link

  return repo.homepage
})

const config = computed(() => {
  return LangConfigs.find((conf) => {
    return conf.name === repo.language
  })
})

const clone = computed(() => {
  return `https://github.com/${github.name}/${repo.repository}`
})
</script>

<template>
  <div class="a-border a-shadow h-40 w-full">
    <a :href="link" target="_blank" class="h-full w-full flex flex-col p-2 md:p-3">
      <h3 class="truncate text-5 font-semibold md:text-6" :title="repo.repository">{{ repo.repository }}</h3>
      <p class="line-clamp-4 my-auto">{{ repo.description }}</p>
      <div class="flex items-center gap-3">
        <div class="h-5 w-5" :style=" { color: config?.color }" :class="config?.icon" />
        <span class="text-0.5">{{ config?.name }}</span>
        <div class="ml-auto flex items-center gap-2" :title="clone">
          <span>clone</span>
          <div class="i-tabler-brand-github h-5 w-5" />
        </div>
      </div>
    </a>
  </div>
</template>

<style lang='scss'></style>

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
const { copy, copied } = useClipboard()

const clone = computed(() => {
  return `git clone https://github.com/${github.name}/${repo.repository}.git`
})

function onCloneHandler() {
  copy(clone.value)
}
</script>

<template>
  <div class="group/card relative w-full bg-stone-300/10 a-border dark:bg-zinc-800/40 a-shadow">
    <div class="h-full w-full flex flex-col p-2 md:p-3">
      <h3 class="truncate text-5 font-semibold md:text-6" :title="repo.repository">
        {{ repo.repository }}
      </h3>
      <p class="line-clamp-2 my-2 h-13">
        {{ repo.description || '暂未有介绍' }}
      </p>
      <div class="flex items-center gap-3">
        <div class="h-5 w-5" :style=" { color: config?.color }" :class="config?.icon" />
        <span class="text-0.5">{{ config?.name }}</span>
        <a :href="link" :title="link" target="_blank" class="ml-auto">
          <div class="i-tabler-brand-github h-5 w-5" />
        </a>
      </div>
    </div>
    <div :title="clone" class="absolute right-0 top-0 hidden cursor-pointer items-center gap-2 rounded a-glass px-3 py-1 group-hover/card:flex md:rounded-md" @click="onCloneHandler">
      <div v-if="!copied" class="i-tabler-command h-4 w-4" />
      <div v-else class="i-tabler-check h-4 w-4" />
      <span>clone</span>
    </div>
  </div>
</template>

<style lang='scss'></style>

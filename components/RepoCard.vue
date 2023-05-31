<script setup lang='ts'>
import type { RepoResponse } from '~/types'

const { repo } = withDefaults(defineProps< { repo?: Partial<RepoResponse> } >(), { repo: () => ({ description: '', homepage: '/', repository: '', language: 'JavaScript', link: '/' }) })
</script>

<template>
  <div class="a-border a-shadow h-40 w-full">
    <a :href="repo.homepage" target="_blank" class="block h-full w-full p-2 md:p-3">
      <h3>{{ repo.repository }}</h3>
      <p>{{ repo.description }}</p>
    </a>
  </div>
</template>

<style lang='scss'></style>

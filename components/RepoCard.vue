<script setup lang='ts'>
import type { RepoResponse } from '~/types'

const { repo } = withDefaults(defineProps< { repo?: Partial<RepoResponse> } >(), { repo: () => ({ description: '', homepage: '/', repository: '', language: 'JavaScript', link: '/' }) })
</script>

<template>
  <div>
    {{ repo.repository }}
    {{ repo.homepage }}
  </div>
</template>

<style lang='scss'></style>

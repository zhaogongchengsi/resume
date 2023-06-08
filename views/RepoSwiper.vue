<script setup lang='ts'>
import type { RepoResponse } from '~/types'

const props = withDefaults(defineProps<{ data?: RepoResponse[] }>(), { data: () => [] })
</script>

<template>
  <div class="my-4">
    <ul class="md:grid-col-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <li v-for="item of props.data" :key="item.repository">
        <RepoCard :repo="item" />
      </li>
    </ul>
  </div>
</template>

<style lang='scss'></style>

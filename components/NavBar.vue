<script setup lang='ts'>
import type { Resume } from '~/types'

const appConfig = useAppConfig() as Resume
</script>

<template>
  <nav>
    <ul class="flex border border-zinc-300 rounded-xl dark:border-zinc-600">
      <li v-for="item of appConfig.navbar" :key="item.link">
        <router-link :to="item.link" class="block px-4 py-2 text-zinc-500 dark:text-zinc-200 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-200">
          <span>{{ $t(item.title) }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang='ts'>
import type { PropType } from 'vue'

const props = defineProps({
  data: Array as PropType<{
    name: string
    icon?: string
    details: string
    github: string
    language?: string[]
  }[]>,
})
</script>

<template>
  <ul class="z-2 max-w-200 w-full">
    <li v-for="(item, index) of props.data" :key="index" class="my-3 md:my-5 md:my-7">
      <a :href="item.github" target="_blank" class="group flex gap-2 rounded-md bg-gray-400/10 px-3 py-4 hover:bg-gray-400/20">
        <div v-if="item.icon" class="h-8 w-8 flex items-center justify-center opacity-25 group-hover:opacity-40">
          <div class="i-carbon:logo-github h-5 w-5" />
        </div>
        <div class="flex-1">
          <span class="block text-5 font-semibold text-neutral-300/80 md:text-6 group-hover:text-neutral-300">{{ item.name }}</span>
          <p class="my-2 text-3 font-light text-neutral-400/70 md:text-4 group-hover:text-neutral-400">{{ item.details }}</p>
          <div v-if="item.language" class="flex justify-end gap-2">
            <span v-for="(language, i) of item.language" :key="i" class="text-2 opacity-15 group-hover:opacity-20">{{ language.toLocaleLowerCase() }}</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

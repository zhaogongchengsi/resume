<script setup lang='ts'>
const props = defineProps({
  data: Array as PropType<{
    name: string
    icon?: string
    link: string
  }[]>,
})
</script>

<template>
  <ul class="grid grid-cols-3 max-w-250 w-full gap-2 md:grid-cols-4 md:gap-3">
    <li v-for="(item, index) of props.data" :key="index">
      <a :href="item.link" target="_blank" class="flex border border-slate-500 rounded-md p-2 dark:border-slate-600">
        <div v-if="item.icon" h-5 w-5 class="icon-default" :class="item.icon" />
        <span>{{ item.name }}</span>
      </a>
    </li>
  </ul>
</template>

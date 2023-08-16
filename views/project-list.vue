<script setup lang='ts'>
import type { PropType } from 'vue'

const props = defineProps({
  data: Array as PropType<{
    name: string
    icon: string
  }[]>,
})
</script>

<template>
  <ul class="max-w-250 w-full">
    <li v-for="(item, index) of props.data" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

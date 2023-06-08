<script setup lang='ts'>
import { provide } from 'vue'
import { provideKey } from './shared'

const headers = shallowRef<{ title: string; icon: string }[]>([])
provide(provideKey, headers)
</script>

<template>
  <div class="w-full">
    <slot />
  </div>
</template>

<style lang='scss'></style>

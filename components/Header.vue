<script setup lang='ts'>
import DarkToggle from './DarkToggle.vue'

const { github } = useAppConfig() as any
</script>

<template>
  <div class="mx-auto flex items-center justify-between py-4 resume-container md:py-6">
    <h1 class="text-lg md:text-2xl">
      Z
    </h1>
    <div class="flex items-center gap-3">
      <a v-if="github" target="_blank" :href="github" class="block icon-default"> <div class="i-carbon-logo-github icon-btn icon-default" /> </a>
      <DarkToggle class="icon-btn icon-default" />
    </div>
  </div>
</template>

<style lang='scss'></style>

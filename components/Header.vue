<script setup lang='ts'>
import DarkToggle from './DarkToggle.vue'

const { github } = useAppConfig() as any
</script>

<template>
  <div class="resume-container mx-auto flex items-center justify-between py-4 md:py-6">
    <h1 class="text-lg md:text-2xl">
      Resume
    </h1>
    <div class="flex items-center gap-3">
      <a v-if="github" target="_blank" :href="github" class="icon-default block"> <div class="i-carbon-logo-github icon-default icon-btn" /> </a>
      <DarkToggle class="icon-default icon-btn" />
    </div>
  </div>
</template>

<style lang='scss'></style>

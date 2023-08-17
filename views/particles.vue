<script setup lang='ts'>
import { isClient } from '@vueuse/core'

if (isClient)
  window.particlesJS.load('particles-js', '/particles.json')
</script>

<template>
  <div id="particles-js" class="fixed left-0 top-0 z--1 h-screen w-screen" />
</template>

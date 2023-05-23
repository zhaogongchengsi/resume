<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

html.dark {
  background: #222;
  color: white;
}
</style>

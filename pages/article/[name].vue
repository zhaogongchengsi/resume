<script setup lang='ts'>
const route = useRoute()

definePageMeta({
  layout: 'article',
})
</script>

<template>
  <div class="resume-prose mx-auto max-w-180 w-full rounded-lg bg-white/40 p-4 backdrop-blur-sm dark:bg-black/40">
    <ContentDoc path="crypto" />
  </div>
</template>

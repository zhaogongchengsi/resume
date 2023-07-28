<script setup lang='ts'>
const route = useRoute()

definePageMeta({
  layout: 'article',
})
</script>

<template>
  <div class="resume-prose mx-auto max-w-180 w-full">
    <ContentDoc path="crypto" />
  </div>
</template>

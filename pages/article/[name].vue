<script setup lang='ts'>
const route = useRoute()

definePageMeta({
  layout: 'article',
})
</script>

<template>
  <div class="text-base prose prose-truegray xl:text-xl dark:prose-invert">
    <ContentDoc path="/" />
  </div>
</template>

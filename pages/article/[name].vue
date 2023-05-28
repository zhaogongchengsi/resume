<script setup lang='ts'>
const route = useRoute()

definePageMeta({
  layout: 'article',
})
</script>

<template>
  <div class="max-w-full text-base prose prose-truegray w-full! xl:text-xl dark:prose-invert">
    <ContentDoc path="/" />
  </div>
</template>

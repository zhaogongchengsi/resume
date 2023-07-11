<script setup lang="ts">
definePageMeta({
  title: '首页',
})
const { page } = useContent()

useContentHead(page)
</script>

<template>
  <div class="home-page-container mx-auto">
    <div class="mx-auto prose prose-truegray dark:prose-invert">
      <ContentDoc v-slot="{ doc }" path="me">
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
  </div>
</template>

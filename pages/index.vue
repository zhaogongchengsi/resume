<script setup lang="ts">
definePageMeta({
  title: '首页',
})

const { locale } = useI18n()
const { page } = useContent()
useContentHead(page)

const me = computed(() => {
  return locale.value === 'en' ? 'me' : 'cn/me'
})
</script>

<template>
  <div class="mx-auto px-3 py-4 container">
    <div class="mx-auto max-w-200 w-full">
      <ContentDoc v-slot="{ doc }" path="me">
        <h1 class="text-8">
          {{ doc.title }}
        </h1>
        <p class="text-6">
          {{ doc.description }}
        </p>
        <article class="prose prose-truegray max-w-200! dark:prose-invert">
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </div>
</template>

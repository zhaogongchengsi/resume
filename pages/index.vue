<script setup lang="ts">
definePageMeta({
  title: '首页',
})

const { locale } = useI18n()
const { page } = useContent()
useContentHead(page)

const me = computed(() => {
  return locale.value === 'en' ? 'me' : 'me_cn'
})
</script>

<template>
  <div class="mx-auto px-3 py-4 container lg:my-8 md:my-10">
    <div class="mx-auto max-w-250 w-full">
      <ContentDoc v-slot="{ doc }" :path="me">
        <div class="my-5 flex flex-col items-center gap-5 md:items-start">
          <h1 class="text-8 font-bold md:text-16 sm:text-12">
            {{ doc.title }}
          </h1>
          <p
            class="text-6 font-semibold sm:text-8"
          >
            {{ doc.description }}
          </p>
        </div>

        <article class="home-prose">
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </div>
</template>

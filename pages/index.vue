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
        <div class="flex flex-col-reverse items-center md:flex-row">
          <div class="my-5 flex flex-col items-center gap-5 md:items-start">
            <h1 class="text-8 font-bold md:text-16 sm:text-12">
              {{ doc.title }}
            </h1>
            <p class="from-blue-500 to-purple-500 bg-gradient-to-r bg-clip-text text-6 font-semibold text-transparent sm:text-8">
              {{ doc.description }}
            </p>

            <router-link to="/article" class="flex items-center gap-5 border border-2 border-indigo-500/75 rounded-lg px-4 py-2 shadow-indigo-500/70 hover:border-indigo-500 md:rounded-xl md:px-5 md:py-3 hover:shadow-lg">
              <span class="text-3 md:text-4">{{ $t("view") }}</span>
              <div h-5 w-5 text-indigo class="i-carbon:plan" />
            </router-link>
          </div>

          <div v-if="doc.image" class="mx-auto max-w-50 md:ml-auto md:mr-0 md:max-w-70 sm:max-w-60">
            <img class="w-full" :src="doc.image.src" :alt="doc.image.alt">
          </div>
        </div>

        <article class="prose prose-truegray max-w-250! dark:prose-invert">
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup lang='ts'>
definePageMeta({
  layout: 'article',
})

const { next, prev } = useContent()
const router = useRoute()
const { locale } = useI18n()
const { page } = useContent()
useContentHead(page)

const name = computed(() => {
  return locale.value === 'en' ? router.params.name : `${router.params.name}_cn`
})
</script>

<template>
  <div class="mx-auto max-w-180 w-full rounded-lg bg-white/40 p-4 backdrop-blur-sm dark:bg-black/40">
    <ContentDoc :path="`blog/${name}`">
      <template #default="{ doc }">
        <h3 class="resume-prose-ignore mt-3 text-center text-6 md:text-7">
          {{ doc.title }}
        </h3>
        <div class="mb-8 mt-3 flex items-center justify-center gap-10 opacity-50">
          <span>{{ doc.author }}</span>
          <span>{{ doc.time }}</span>
        </div>
        <article class="resume-prose">
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <div class="flex flex-col items-center gap-10 py-10">
          <div h-7 w-7 md:h-10 md:w-10 class="i-tabler-info-square-rounded" />
          <h6>{{ $t("not-exist") }}</h6>
        </div>
      </template>
    </ContentDoc>

    <div class="mt-5 flex items-center justify-between">
      <NuxtLink v-if="prev" :to="prev._path" class="max-w-1/2 flex items-center opacity-75 hover:opacity-100">
        <div h-5 w-5 class="i-carbon:chevron-left" />
        <span>{{ $t("prev") }}</span>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next._path" class="max-w-1/2 flex items-center opacity-75 hover:opacity-100">
        <span>{{ $t("next") }}</span>
        <div h-5 w-5 class="i-carbon:chevron-right" />
      </NuxtLink>
    </div>
  </div>
</template>

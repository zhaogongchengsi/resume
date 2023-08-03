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
            <p
              class="from-blue-500 to-purple-500 bg-gradient-to-r bg-clip-text text-6 font-semibold text-transparent sm:text-8"
            >
              {{ doc.description }}
            </p>

            <router-link
              to="/article"
              class="flex items-center gap-5 border border-2 border-indigo-500/75 rounded-lg px-4 py-2 shadow-indigo-500/70 hover:border-indigo-500 md:rounded-xl md:px-5 md:py-3 hover:shadow-lg"
            >
              <span class="text-3 md:text-4">{{ $t("view") }}</span>
              <div h-5 w-5 text-indigo class="i-carbon:plan" />
            </router-link>
          </div>

          <div v-if="doc.image" class="mx-auto max-w-50 md:ml-auto md:mr-0 md:max-w-70 sm:max-w-60">
            <img class="w-full" :src="doc.image.src" :alt="doc.image.alt">
          </div>
        </div>

        <article class="home-prose">
          <ContentRenderer :value="doc" />
        </article>

        <ul class="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 md:gap-5 sm:gap-4">
          <li
            v-for="(project, index) of doc.projects" :key="index"
            class="group relative flex overflow-hidden border border-black/30 rounded-md p-1px dark:border-white/30"
          >
            <div class="gradient-border-light absolute left-0 top-0 z-9 hidden h-full w-full animate-spin ease-linear light:group-hover:block" />
            <div class="gradient-border-dark absolute left-0 top-0 z-9 hidden h-full w-full animate-spin ease-linear dark:group-hover:block" />

            <a href="#" class="z-10 h-full w-full flex flex-col gap-3 rounded-md bg-[var(--backgroud)] p-3">
              <div class="flex items-center gap-2 sm:gap-3">
                <span class="text-5 md:text-7 sm:text-6">{{ project.icon }}</span>
                <span class="text-5 sm:text-6">{{ project.name }}</span>
              </div>
              <p class="text-4 text-white/50 sm:text-5">{{ project.details }}</p>
            </a>
          </li>
        </ul>
      </ContentDoc>
    </div>
  </div>
</template>

<style>
.gradient-border-dark {
  background: linear-gradient(360deg, hsla(0, 0%, 100%, .5), hsla(0, 0%, 100%, .1), #fff, hsla(0, 0%, 100%, .3));
}

.gradient-border-light {
  background: linear-gradient(360deg, #00dc82, #fff, rgba(54, 228, 218, .7), rgba(29, 224, 177, .3));
}

.animate-spin {
  animation:  spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

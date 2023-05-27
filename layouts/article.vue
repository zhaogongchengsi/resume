<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import Header from '~/components/Header.vue'

const isShow = ref(false)
const { width } = useWindowSize()

const asideShow = computed(() => {
  if (width.value > 780)
    return true

  return isShow.value
})

function onMenuHandler() {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="fixed left-0 top-0 z--1 h-screen w-full md:h-auto md:w-7/10">
    <img class="h-full w-full dark:hidden" src="/bg.png" alt="">
    <img class="h-full w-full light:hidden" src="/bg-dark.png" alt="">
  </div>
  <header class="sticky top-0 mx-auto resume-container">
    <Header is-menu @click-menu="onMenuHandler">
      <template #logo>
        <a href="/">Z</a>
      </template>
    </Header>
  </header>
  <main class="mx-auto flex flex-1 justify-center resume-container 2xl:gap-8 lg:gap-4 md:gap-2 xl:gap-6">
    <article class="flex-1">
      <slot />
    </article>
    <aside class="fixed left-0 top-0 hidden h-screen w-full bg-gray-900/70 md:static md:w-70 md:bg-transparent" :class="{ 'block!': asideShow }" @click.self="isShow = !isShow">
      <Transition>
        <nav v-show="asideShow" class="px-3 py-10 md:p-0">
          <ContentNavigation v-slot="{ navigation }">
            <ul>
              <li v-for="link of navigation" :key="link._path">
                <NuxtLink :to="link._path">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </ContentNavigation>
        </nav>
      </Transition>
    </aside>
  </main>
</template>

<style>
</style>

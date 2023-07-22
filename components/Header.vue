<script setup lang='ts'>
import NavBar from './NavBar.vue'
import type { Resume } from '~/types'

const appConfig = useAppConfig() as Resume
const { locale } = useI18n()

const open = ref(false)
</script>

<template>
  <div class="relative mx-auto flex items-center justify-between bg-[var(--backgroud)] px-3 py-4 md:py-4.5 sm:py-4">
    <h1 class="text-lg md:text-2xl">
      <slot name="logo">
        <span>Z</span>
      </slot>
    </h1>
    <div class="hidden md:block">
      <NavBar />
    </div>
    <div class="flex items-center gap-3">
      <nuxt-link v-if="locale === 'en'" :to="switchLocalePath('cn')">
        中文
      </nuxt-link>
      <nuxt-link v-else :to="switchLocalePath('en')">
        English
      </nuxt-link>
      <a target="_blank" href="https://github.com/zhaogongchengsi" class="block icon-default">
        <div class="i-tabler:brand-github icon-btn icon-default" />
      </a>
      <DarkToggle class="icon-btn icon-default" />
      <button class="i-tabler-menu-2 block icon-btn md:hidden icon-default" @click="open = !open" />
    </div>
    <teleport to="body">
      <Transition name="mobile-nav">
        <div
          v-if="open"
          class="fixed left-0 top-0 z-9999 block h-screen w-full bg-[var(--backgroud)] px-3 py-3 md:hidden"
        >
          <div class="flex justify-end">
            <button class="i-tabler-x h-6 w-6 select-none" @click="open = false" />
          </div>
          <ul class="divide-y divide-slate-700/60 dark:divide-slate-300/50">
            <li v-for="item of appConfig.navbar" :key="item.link">
              <router-link
                :to="item.link"
                class="block px-4 py-2 text-zinc-500 dark:text-zinc-200 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-200"
              >
                <span>{{ $t(item.title) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </Transition>
    </teleport>
  </div>
</template>

<style lang='scss'>
.header-suspension {
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--backgroud);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: left 0.3s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  left: -100%;
}
</style>

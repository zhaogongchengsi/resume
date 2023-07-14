<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core'
import NavBar from './NavBar.vue'

const { y } = useWindowScroll()
const isTop = ref(false)
const { locale } = useI18n()

onMounted(() => {
  if (y.value > 0)
    isTop.value = true
})

watch(y, (newValue) => {
  if (newValue > 0)
    isTop.value = true

  else
    isTop.value = false
})

function setLang() {
  locale.value = locale.value === 'en' ? 'cn' : 'en'
}
</script>

<template>
  <div
    class="mx-auto flex items-center justify-between px-3 py-4 md:py-4.5 sm:py-4"
    :class="isTop ? 'header-suspension' : ''"
  >
    <h1 class="text-lg md:text-2xl">
      <slot name="logo">
        <span>Z</span>
      </slot>
    </h1>
    <NavBar />
    <div class="flex items-center gap-3">
      <span class="cursor-pointer" @click="setLang"> {{ locale === 'en' ? '中文' : 'English' }} </span>
      <a target="_blank" href="https://github.com/zhaogongchengsi" class="block icon-default">
        <div class="i-tabler:brand-github icon-btn icon-default" />
      </a>
      <DarkToggle class="icon-btn icon-default" />
      <button class="i-tabler-menu-2 block icon-btn md:hidden icon-large" />
    </div>
  </div>
</template>

<style lang='scss'>
.header-suspension {
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--backgroud);
}
</style>

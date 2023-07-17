<script setup lang='ts'>
import NavBar from './NavBar.vue'

const { locale } = useI18n()
const open = ref(false)

function setLang() {
  locale.value = locale.value === 'en' ? 'cn' : 'en'
}
</script>

<template>
  <div class="relative mx-auto flex items-center justify-between bg-[var(--backgroud)] px-3 py-4 md:py-4.5 sm:py-4">
    <h1 class="text-lg md:text-2xl">
      <slot name="logo">
        <span>Z</span>
      </slot>
    </h1>
    <div :class="[open ? 'open' : 'close']" class="absolute left-0 top-full grid w-full bg-[var(--backgroud)] md:static md:w-auto">
      <div class="overflow-hidden md:overflow-auto open-transition">
        <NavBar />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="cursor-pointer" @click="setLang"> {{ locale === 'en' ? '中文' : 'English' }} </span>
      <a target="_blank" href="https://github.com/zhaogongchengsi" class="block icon-default">
        <div class="i-tabler:brand-github icon-btn icon-default" />
      </a>
      <DarkToggle class="icon-btn icon-default" />
      <button class="i-tabler-menu-2 block icon-btn md:hidden icon-default" @click="open = !open" />
    </div>
  </div>
</template>

<style lang='scss'>
.header-suspension {
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--backgroud);
}

.close {
  grid-template-rows: 0;
  @apply md:grid-rows-1
}
.open {
  grid-template-rows: auto;
}

.open-transition {
  transition: height 0.3s;
}
</style>

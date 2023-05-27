<script setup lang="ts">
import Header from '~/components/Header.vue'

function onMenuHandler() {
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
  <main class="mx-auto flex flex-1 justify-center resume-container">
    <article class="flex-1">
      <slot />
    </article>
    <aside class="w-70">
      Aside
    </aside>
  </main>
</template>

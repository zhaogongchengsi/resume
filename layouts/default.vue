<script setup lang="ts">
import Header from '~/components/Header.vue'
</script>

<template>
  <div class="fixed left-0 top-0 z--1 h-1/2 w-full md:h-auto md:w-7/10">
    <img class="h-full w-full dark:hidden" src="bg.png" alt="">
    <img class="h-full w-full light:hidden" src="bg-dark.png" alt="">
  </div>
  <header class="header sticky top-0 mx-auto container">
    <Header />
  </header>
  <main class="mx-auto container">
    <slot />
  </main>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
</script>

<template>
  <header class="sticky top-0 z-999 mx-auto container">
    <Header>
      <template #logo>
        <a href="/"> <img class="h-8 w-8 lg:h-10 lg:w-10" src="/logo.png" alt=""> </a>
      </template>
    </Header>
  </header>
  <main class="mx-auto container">
    <slot />
  </main>
  <Footer />
</template>

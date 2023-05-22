<script setup lang="ts">
import Header from '~/components/Header.vue'
</script>

<template>
  <header class="header mx-auto container">
    <Header />
  </header>
  <main class="mx-auto container">
    <slot />
  </main>
</template>

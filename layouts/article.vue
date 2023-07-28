<script setup lang="ts">
</script>

<template>
  <Header>
    <template #logo>
      <a href="/"> <img class="h-8 w-8 lg:h-10 lg:w-10" src="/logo.png" alt=""> </a>
    </template>
  </Header>
  <main class="relative mx-auto w-full">
    <article class="mx-auto w-full px-3 py-3 container md:py-6">
      <slot />
    </article>
  </main>
  <Footer />
</template>

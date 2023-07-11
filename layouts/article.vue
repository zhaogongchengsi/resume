<script setup lang="ts">
</script>

<template>
  <header class="sticky top-0 z-999 mx-auto container">
    <Header>
      <template #logo>
        <a href="/"> <img class="h-8 w-8 lg:h-10 lg:w-10" src="/logo.png" alt=""> </a>
      </template>
    </Header>
  </header>
  <main class="relative mx-auto flex flex-1 justify-center resume-container 2xl:gap-10 lg:gap-4 md:gap-2 xl:gap-6">
    <article class="mx-auto container">
      <slot />
    </article>
  </main>
  <Footer />
</template>

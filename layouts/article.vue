<script setup lang="ts">
import DarkToggle from '~/components/DarkToggle.vue'
</script>

<template>
  <main class="relative mx-auto flex flex-1 justify-center resume-container 2xl:gap-10 lg:gap-4 md:gap-2 xl:gap-6">
    <article class="w-full md:w-150">
      <slot />
    </article>
    <div class="fixed bottom-5 right-5">
      <DarkToggle />
    </div>
  </main>
</template>

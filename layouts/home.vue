<script setup lang="ts">

</script>

<template>
  <UContainer class="min-h-screen flex flex-col items-center">
    <app-header />
    <article class="my-auto prose-zinc prose dark:prose-invert lg:prose-xl">
      <slot />
    </article>
    <app-footer />
  </UContainer>
</template>

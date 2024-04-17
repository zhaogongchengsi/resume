<script setup lang="ts">

</script>

<template>
  <UContainer class="min-h-screen">
    <app-header />
    <div class="w-full prose-zinc prose dark:prose-invert lg:prose-xl mx-auto py-4">
      <slot />
    </div>
  </UContainer>
</template>

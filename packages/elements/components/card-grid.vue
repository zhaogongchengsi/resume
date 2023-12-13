<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features',
  },
})
</script>

<template>
  <section class="my-5 md:my-8">
    <ContentSlot :use="$slots.root" />

    <h2 class="text-block text-2xl font-bold md:text-3xl dark:text-white">
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ title }}
      </ContentSlot>
    </h2>
    <div class="grid grid-cols-1 mt-3 gap-2 lg:grid-cols-3 md:grid-cols-2 md:mt-5">
      <slot />
    </div>
  </section>
</template>

<style lang='scss'></style>

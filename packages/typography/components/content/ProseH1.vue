<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script>

<template>
  <h1 :id="id" class="typography-headline1">
    <a
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<style lang="ts">
css({
  '.typography-headline1': {
    fontSize: '{prose.h1.fontSize}',
    fontWeight: '{prose.h1.fontWeight}',
    marginBottom: '{space.md}'
  },
})
</style>

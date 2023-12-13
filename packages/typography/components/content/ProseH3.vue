<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>

<template>
  <h3 :id="id" class="typography-headline3">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<style lang="ts">
css({
  '.typography-headline3': {
    fontSize: '{prose.h3.fontSize}',
    fontWeight: '{prose.h3.fontWeight}',
    marginBottom: '{space.md}'
  },
})
</style>

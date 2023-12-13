<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h4)
</script>

<template>
  <h4 :id="id" class="typography-headline4">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>

<style lang="ts">
css({
  '.typography-headline4': {
    fontSize: '{prose.h4.fontSize}',
    fontWeight: '{prose.h4.fontWeight}',
    marginBottom: '{space.md}',
  },
})
</style>

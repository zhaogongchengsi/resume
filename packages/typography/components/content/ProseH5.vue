<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h5)
</script>

<template>
  <h5 :id="id" class="typography-headline5">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h5>
</template>

<style lang="ts">
css({
  '.typography-headline5': {
    fontSize: '{prose.h5.fontSize}',
    fontWeight: '{prose.h5.fontWeight}',
    marginBottom: '{space.md}',
  },
})
</style>

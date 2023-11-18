<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h6)
</script>

<template>
  <h6 :id="id" class="typography-headline6">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h6>
</template>

<style lang="ts">
css({
  '.typography-headline6': {
    fontSize: '{prose.h6.fontSize}',
    fontWeight: '{prose.h6.fontWeight}',
  },
})
</style>

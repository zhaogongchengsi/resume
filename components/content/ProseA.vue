<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink :href="href" :target="target" class="typography-a">
    <slot />
  </NuxtLink>
</template>

<style lang="ts">
css({
  '.typography-a': {
    'color': '{prose.a.color}',
    'text-decoration': '{prose.a.textDecoration}',
    'font-weight': '{prose.a.fontWeight}',
    'font-size': '{prose.a.fontSize}',
    'line-height': '{prose.a.lineHeight}',
    'letter-spacing': '{prose.a.letterSpacing}',
  }
})
</style>

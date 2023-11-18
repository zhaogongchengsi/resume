<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="typography-pre_x">
    <pre :class="$props.class"><slot /></pre>
  </div>
</template>

<style lang="ts">
css({
  '.typography-pre_x': {
    width: '100%',
    position: 'relative',
    borderColor: '{prose.pre.border.color}',
    borderWidth: '{prose.pre.border.width}',
    borderStyle: '{prose.pre.border.style}',
    borderRadius: '3px',
    overflow: 'hidden',
    'pre': {
      overflowX: 'auto',
      padding: '{prose.pre.padding}',
      lineHeight: '{prose.pro.lineHeight}',
      display: 'flex',
      flex: '1',
    },
    'code': {
      flexShrink: '0',
    },
    'code, .line': {
      display: 'block',
    },
  },
})
</style>

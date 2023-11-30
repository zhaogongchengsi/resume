<script setup lang="ts">
const props = defineProps({
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

const { copy, copied, isSupported } = useClipboard({ source: props.code })
async function copyCode() {
  await copy(props.code)
}
</script>

<template>
  <div class="typography-pre_x">
    <div class="typography-pre_x_header">
      <span class="typography-pre_x_header_language">{{ language }}</span>
      <button v-if="isSupported" class="typography-pre_x_header_copy_button h-4 w-4" :class=" copied ? 'i-carbon:checkmark' : 'i-carbon:copy' " @click="copyCode" />
    </div>
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
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '{space.md} 0',
    backgroundColor: '{prose.pre.backgroundColor}',
    borderBottom: '1px solid {prose.pre.border.color}',
    '.typography-pre_x_header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between',
      padding: '5px',
      backgroundColor: '{prose.pre.backgroundColor}',
      borderBottom: '1px solid {prose.pre.border.color}',
      '.typography-pre_x_header_language': {
        color: '{prose.pre.language.color}',
        fontSize: '{prose.pre.language.fontSize}',
        textTransform: 'uppercase'
      },
      '.typography-pre_x_header_copy_button': {
        opacity: 0.5,
        cursor: 'pointer',
        '&:hover': {
          opacity: 1
        }
      }
    },
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

<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
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
  },
})
</script>

<template>
  <div class="a-code-container relative my-10 w-full">
    <div class="resume-scroll overflow-x-auto">
      <slot />
    </div>
    <div class="absolute right-0 top-0">
      {{ language }}
    </div>
  </div>
</template>

<style lang="scss">
.a-code-container {
  border: 1px solid var(--pre-border-color);
}
</style>

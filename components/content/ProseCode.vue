<script lang="ts">
import { useClipboard } from '@vueuse/core'
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
  setup() {
    const { copy, copied } = useClipboard()

    return {
      copy,
      copied,
    }
  },
})
</script>

<template>
  <div class="relative my-5 w-full">
    <div class="mb-2 flex items-center justify-between">
      <div class="text-4 uppercase">
        {{ language }}
      </div>
      <button class="h-5 w-5" :class="[!copied ? 'i-carbon:copy' : 'i-carbon:checkmark']" @click="copy(code)" />
    </div>
    <div class="resume-scroll overflow-x-auto rounded-lg bg-gray-100 p-3 dark:bg-zinc-900">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShallowRef } from 'vue'
import { inject } from 'vue'
import { provideKey } from './shared'

interface PaneProps {
  title?: string
  icon?: string
}

const props = withDefaults(defineProps<PaneProps>(), {
  title: '',
  icon: 'i-tabler-brand-bunpo',
})

const headers = inject<ShallowRef<PaneProps[]>>(provideKey)
headers?.value.push(props)
</script>

<template>
  <div>
    <span>{{ props.title }}</span>
    <slot />
  </div>
</template>

<style lang=''></style>

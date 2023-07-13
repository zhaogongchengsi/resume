<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core'

const props = withDefaults(defineProps<{ isMenu?: boolean }>(), { isMenu: false })
const emit = defineEmits(['clickMenu'])
const { y } = useWindowScroll()
const { social } = useAppConfig() as any
const isTop = ref(false)

onMounted(() => {
  if (y.value > 0)
    isTop.value = true
})

watch(y, (newValue) => {
  if (newValue > 0)
    isTop.value = true

  else
    isTop.value = false
})

function clickMenu() {
  emit('clickMenu')
}
</script>

<template>
  <div
    class="mx-auto flex items-center justify-between px-3 py-4 md:py-4.5 sm:py-4"
    :class="isTop ? 'header-suspension' : ''"
  >
    <h1 class="text-lg md:text-2xl">
      <slot name="logo">
        <span>Z</span>
      </slot>
    </h1>
    <div class="flex items-center gap-3">
      <a target="_blank" href="https://github.com/zhaogongchengsi" class="block icon-default">
        <div class="i-carbon-logo-github icon-btn icon-default" />
      </a>
      <DarkToggle class="icon-btn icon-default" />
      <button v-if="props.isMenu" class="i-tabler-menu-2 block icon-btn md:hidden icon-large" @click="clickMenu" />
    </div>
  </div>
</template>

<style lang='scss'>
.header-suspension {
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--backgroud);
}
</style>

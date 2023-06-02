<script setup lang='ts'>
const props = withDefaults(defineProps<{ color?: string; total?: number; value?: number }>(), {
  color: 'pink',
  total: 100,
  value: 0,
})

const percentage = computed(() => {
  const percentage = (props.value / props.total) * 100
  return `${percentage.toFixed(2)}%`
})
</script>

<template>
  <div class="pillar-container pillar-rounded h-2 w-full overflow-hidden p-0.5 sm:h-3 sm:p-0.8">
    <div class="pillar-content pillar-rounded h-full w-20" :style="{ width: percentage }" />
  </div>
</template>

<style lang='scss'>
.pillar-rounded {
  @apply rounded lg:rounded-lg md:rounded-md sm:rounded-sm
}

.pillar-container {
  background-color: var(--pillar-base-color);
}

.pillar-content {
  background-color: v-bind('props.color');
}
</style>

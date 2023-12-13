<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info' | 'success' | 'warning' | 'danger'
}>(), {
  type: 'info',
})

const typeClass = computed(() => {
  return {
    'badge-info': props.type === 'info',
    'badge-success': props.type === 'success',
    'badge-warning': props.type === 'warning',
    'badge-danger': props.type === 'danger',
  }
})
</script>

<template>
  <span class="badge mx-1 inline-flex rounded-md p-1" :class="typeClass">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>

<style lang="ts">
css({
	'.badge': {
		marginBottom: '{space.lg}',
	},
	'.badge-danger': {
		backgroundColor: '{color.state.danger.background}',
		color: '{color.state.danger.color}',
	},
	'.badge-warning': {
		backgroundColor: '{color.state.warning.background}',
		color: '{color.state.warning.color}',
	},
	'.badge-info': {
		backgroundColor: '{color.state.info.background}',
		color: '{color.state.info.color}',
	},
	'.badge-success': {
		backgroundColor: '{color.state.success.background}',
		color: '{color.state.success.color}',
	},
})
</style>

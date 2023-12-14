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
  <span class="badge" :class="typeClass">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>

<style lang="ts">
css({
	'.badge': {
		margin: '0 {space.sm} {space.lg} {space.sm}',
		display: 'inline-flex',
		padding: '{space.xs} {space.sm}',
		borderRadius: '9999px',
	},
	'.badge-danger': {
		backgroundColor: '{state.danger.background}',
		color: '{state.danger.color}',
		border: '1px solid {state.danger.border}'
	},
	'.badge-warning': {
		backgroundColor: '{state.warning.background}',
		color: '{state.warning.color}',
		border: '1px solid {state.warning.border}'
	},
	'.badge-info': {
		backgroundColor: '{state.info.background}',
		color: '{state.info.color}',
		border: '1px solid {state.info.border}'
	},
	'.badge-success': {
		backgroundColor: '{state.success.background}',
		color: '{state.success.color}',
		border: '1px solid {state.success.border}'
	},
})
</style>

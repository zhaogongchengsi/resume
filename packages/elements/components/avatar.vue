<script setup lang="ts">
withDefaults(defineProps<{ size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' } >(), {
  size: 'md',
})
</script>

<template>
  <div class="natural-avatar" :class="`natural-avatar-${size}`">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style lang='ts'>
css({
	'.natural-avatar': {
	    display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '50%',
		overflow: 'hidden',
		margin: '{space.sm} {space.sm}',
		backgroundColor: '{color.gray.200}',
	},
	'.natural-avatar-xs': {
		width: '{avatar.size.xs}',
		height: '{avatar.size.xs}',
	},
	'.natural-avatar-sm': {
		width: '{avatar.size.Sm}',
		height: '{avatar.size.Sm}',
	},
	'.natural-avatar-md': {
		width: '{avatar.size.md}',
		height: '{avatar.size.md}',
	},
	'.natural-avatar-lg': {
		width: '{avatar.size.lg}',
		height: '{avatar.size.lg}',
	},
	'.natural-avatar-xl': {
		width: '{avatar.size.xl}',
		height: '{avatar.size.xl}',
	}
})
</style>

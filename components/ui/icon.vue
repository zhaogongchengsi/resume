<script setup lang="ts">
withDefaults(defineProps<{ icon: string }>(), {
  icon: '',
})
</script>

<template>
  <i :class="icon" class="block h-6 w-6" />
</template>

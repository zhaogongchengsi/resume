<script setup lang='ts'>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  widthClass: {
    type: String,
    default: 'w-6/10',
  },
})
const emit = defineEmits(['update:open'])
function clickSelf() {
  emit('update:open', false)
}
</script>

<template>
  <teleport to="body">
    <div v-if="props.open" class="drawer-container fixed left-0 top-0 z-9999 h-screen w-full bg-black/50 backdrop-blur" @click.self="clickSelf">
      <div class="drawer-center h-full w-0 bg-white dark:bg-slate-900" :class="[props.widthClass, { 'drawer-active': props.open }]">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style lang='scss'>
.drawer-enter-active,
.drawer-leave-active{
  transition: width 0.3s;
}

.drawer-enter ,
.drawer-leave-to {
width: 0 !important;
}
.drawer-center {
transition: width 0.3s;
}
</style>

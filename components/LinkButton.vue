<script setup lang='ts'>
const props = withDefaults(defineProps<{ icon?: string; link?: string }>(), {
  icon: 'i-tabler-arrow-badge-right',
  link: '/',
})
</script>

<template>
  <a
    :href="props.link"
    class="mx-auto inline-block inline-flex items-center rounded-md bg-purple-400 px-2 py-1 text-white shadow transition duration-200 ease-in-out md:ml-0 md:mr-auto hover:bg-purple-500 hover:shadow-2xl"
  >
    <span class="mr-2 text-5"> <slot /> </span>
    <div class="icon-default" :class="[props.icon]" />
  </a>
</template>

<style lang='scss'></style>

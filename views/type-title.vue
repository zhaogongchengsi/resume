<script setup lang='ts'>
const props = defineProps({
  grade: {
    type:
       String as PropType<'1' | '2' | '3' | '4' | '5' | '6'>,
    //  Number as PropType<1 | 2 | 3 | 4 | 5 | 6>

    default: '2',
  },
})
</script>

<template>
  <component :is="`h${props.grade}`" class="text-5 lg:text-8 md:text-7 sm:text-6">
    <slot />
  </component>
</template>

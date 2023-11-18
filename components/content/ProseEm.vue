<template>
  <em class="typography-em">
    <slot />
  </em>
</template>

<style lang="ts">
css({
  '.typography-em': {
    fontStyle: 'italic'
  }
})
</style>

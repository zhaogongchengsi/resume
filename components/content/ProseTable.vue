<template>
  <table class="typography-table">
    <slot />
  </table>
</template>

<style lang="ts">
css({
  '.typography-table': {
    width: '100%',
    borderCollapse: 'collapse',
  }
})
</style>

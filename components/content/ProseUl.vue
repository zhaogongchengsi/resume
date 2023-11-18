<template>
  <ul class="typography-ul">
    <slot />
  </ul>
</template>

<style lang="ts">
css({
  '.typography-ul': {
    listStyleType: '{prose.ul.listStyleType}',
    listStylePosition: '{prose.ul.listStylePosition}',
    paddingLeft: '{prose.ul.offsetRight}',
    '.typography-ul': {
      listStyleType: '{prose.ul.nested.listStyleType}',
      paddingLeft: '{prose.ul.nested.offsetRight}'
    }
  }
})
</style>

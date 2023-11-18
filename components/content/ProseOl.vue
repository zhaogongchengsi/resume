<template>
  <ol class="typography-ol">
    <slot />
  </ol>
</template>

<style lang="ts">
css({
  '.typography-ol': {
    listStyleType: '{prose.ol.listStyleType}',
    listStylePosition: '{prose.ol.listStylePosition}',
    paddingLeft: '{prose.ol.offsetRight}',
    '.typography-ol': {
      listStyleType: '{prose.ol.nested.listStyleType}',
      paddingLeft: '{prose.ol.nested.offsetRight}'
    }
  }
})
</style>

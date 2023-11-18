<template>
  <code class="typography-code"><slot /></code>
</template>

<style lang="ts">
css({
  '.typography-code': {
    fontWeight: '{prose.code.fontWeight}',
    fontSize: '{prose.code.fontSize}',
    lineHeight: '{prose.code.lineHeight}',
    backgroundColor: '{prose.code.backgroundColor}',
    borderRadius: '{prose.code.borderRadius}',
    padding: '{prose.code.padding}',
  }
})
</style>

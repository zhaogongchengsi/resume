<template>
  <p class="typography-p">
    <slot />
  </p>
</template>

<style lang="ts">
css({
  '.typography-p': {
    'font-size': '{prose.p.fontSize}',
    'line-height': '{prose.p.lineHeight}',
    'font-weight': '{prose.p.fontWeight}',
    'letter-spacing': '{prose.p.letterSpacing}',
    'margin': '{prose.p.margin}',
  }
})
</style>

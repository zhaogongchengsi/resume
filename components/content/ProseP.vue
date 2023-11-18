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
    a: {
      'color': '{prose.a.color}',
      'text-decoration': '{prose.a.textDecoration}',
      'font-weight': '{prose.a.fontWeight}',
      'font-size': '{prose.a.fontSize}',
      'line-height': '{prose.a.lineHeight}',
      'letter-spacing': '{prose.a.letterSpacing}',
    }
  }
})
</style>

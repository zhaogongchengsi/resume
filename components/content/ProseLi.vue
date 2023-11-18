<template>
  <li class="typography-li">
    <slot />
  </li>
</template>

<style lang="ts">
css({
  '.typography-li': {
    margin: '{prose.li.margin}',
  }
})
</style>

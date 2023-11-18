<template>
  <td class="typography-td">
    <slot />
  </td>
</template>

<style lang="ts">
css({
  '.typography-td': {
    textAlign: '{prose.table.align}',
    border: '{prose.table.border.width} {prose.table.border.style}  {prose.table.border.color} ',
  }
})
</style>

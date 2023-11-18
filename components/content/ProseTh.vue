<template>
  <th class="typography-th">
    <slot />
  </th>
</template>

<style lang="ts">
css({
  '.typography-th': {
    textAlign: '{prose.table.align}',
    border: '{prose.table.border.width} {prose.table.border.style}  {prose.table.border.color} ',
  }
})
</style>

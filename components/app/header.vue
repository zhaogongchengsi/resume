<script setup lang="ts">

</script>

<template>
  <header class="app-header-container">
    <div class="mx-auto h-full flex items-center justify-between container">
      <app-logo />
      <ui-dark-toggle />
    </div>
  </header>
</template>

<style lang="scss">
.app-header-container {
  height: $dt('page.header.height');
}
</style>

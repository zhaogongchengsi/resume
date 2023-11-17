<script setup lang="ts">
const { github } = useAppConfig()
</script>

<template>
  <header class="app-header-container sticky top-0 backdrop-blur">
    <div class="area-x mx-auto h-full flex items-center container">
      <app-logo class="mr-auto" />
      <a target="_blank" :href="`https://github.com/${github.owner}`" class="mr-4">
        <i class="i-tabler:brand-github primary-icon" />
      </a>
      <ui-dark-toggle />
    </div>
  </header>
</template>

<style lang="scss">
.app-header-container {
  height: $dt('page.header.height');
//   background-color: var(--backgroud);
}
</style>

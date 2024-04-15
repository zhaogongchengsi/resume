<script setup lang="ts">
const { github } = useAppConfig()
</script>

<template>
  <header class="app-header-container sticky top-0 backdrop-blur">
    <div class="mx-auto h-full flex items-center area-x container">
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
  width: 100vw;
}
</style>

<script setup lang="ts">
const { github } = useAppConfig()
const isCn = useIsCn()
</script>

<template>
  <header class="app-header-container sticky top-0 backdrop-blur">
    <div class="mx-auto h-full flex items-center area-x container">
      <app-logo class="mr-auto" />
      <nuxt-link :to="isCn ? '/' : '/cn'" class="mr-4 text-sm">
        <span>{{ isCn ? '英文' : '中文' }}</span>
      </nuxt-link>
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

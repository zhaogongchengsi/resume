<script setup lang="ts">
  const { github } = useAppConfig()
</script>

<template>
  <header class="w-full">
    <div class="flex items-center justify-end py-3">
      <a target="_blank" class="icon-button mr-3" :href="`https://github.com/${github.owner}`">
        <Icon name="i-carbon:logo-github" />
      </a>
      <ui-dark-toggle />
    </div>
  </header>
</template>

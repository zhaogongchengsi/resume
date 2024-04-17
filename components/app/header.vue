<script setup lang="ts">
  const { github } = useAppConfig()
</script>

<template>
  <header class="w-full">
    <div class="flex items-center justify-end py-3 space-x-6">
      <NuxtLink to="/" active-class="text-green-700">
        Home
      </NuxtLink>
      <NuxtLink to="/blog" active-class="text-green-700">
        Blog
      </NuxtLink>
      <a target="_blank" class="icon-button hover:text-green-700" :href="`https://github.com/${github.owner}`">
        <Icon name="i-carbon:logo-github" />
      </a>
      <ui-dark-toggle class="hover:text-green-700" />
    </div>
  </header>
</template>

<style>
.link-active {
  color: blue;
}
</style>

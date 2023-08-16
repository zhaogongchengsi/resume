<script setup lang='ts'>
const { page } = useContent('favorites.yaml')
const documents = computed(() => {
  return unref(page).document
})

const al = computed(() => {
  return unref(page).al
})

const utils = computed(() => {
  return unref(page).utils
})
</script>

<template>
  <div class="flex flex-col items-center px-3 py-5 md:py-10">
    <type-title grade="3">
      Documents Vue
    </type-title>
    <favorites-list :data="documents.vue" />
    <type-title grade="3">
      Documents React
    </type-title>
    <favorites-list :data="documents.react" />
  </div>
</template>

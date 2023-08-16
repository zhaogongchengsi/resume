<script setup lang='ts'>
const { page } = useContent('projects.yaml')
const templates = computed(() => {
  return unref(page).templates
})

const others = computed(() => {
  return unref(page).other
})
</script>

<template>
  <div class="flex flex-col items-center gap-10 px-3 py-5 md:my-8 md:px-0">
    <h3>Starter Templates</h3>
    <project-list :data="templates" />
    <h3>Others</h3>
    <project-list :data="others" />
  </div>
</template>

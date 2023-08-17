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
    <div class="project-card">
      <h3 class="project-title">
        Starter Templates
      </h3>
      <project-list :data="templates" />
    </div>
    <div class="project-card">
      <h3 class="project-title">
        Others
      </h3>
      <project-list :data="others" />
    </div>
  </div>
</template>

<style>
.project-card {
  width: 100%;
  position: relative;
  @apply flex flex-col items-center;
}

.project-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @apply text-5 md:text-8 opacity-10 font-bold;
  z-index: 1;
}
</style>

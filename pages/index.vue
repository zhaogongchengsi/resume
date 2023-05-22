<script setup lang="ts">
const { title, introduce } = useResume()
</script>

<template>
  <div class="resume-container mx-auto">
    <h2>{{ title }}</h2>
    <p>{{ introduce }}</p>
  </div>
</template>

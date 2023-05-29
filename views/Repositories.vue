<script setup lang='ts'>
const repos = await useFetch('/api/repositories')
console.log(repos.data)
</script>

<template>
  <div>123123</div>
</template>

<style lang='scss'></style>

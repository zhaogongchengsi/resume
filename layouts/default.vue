<script setup lang="ts">

</script>

<template>
  <Header>
    <template #logo>
      <a href="/"> <img class="h-8 w-8 lg:h-10 lg:w-10" src="/logo.png" alt=""> </a>
    </template>
  </Header>

  <main class="mx-auto container">
    <slot />
  </main>
  <particles />
  <Footer />
</template>

<script setup lang='ts'>
const { data } = await useFetch('/api/repositories')
</script>

<template>
  <ClientOnly>
    <RepoSwiper :data="data" />
    <template #fallback>
      <section class="my-4 h-40 flex items-center justify-center lg:my-8 md:my-6 xl:my-10">
        <div class="flex items-center gap-5">
          <div class="i-tabler-fidget-spinner animate-spin" />  <span>Loading...</span>
        </div>
      </section>
    </template>
  </ClientOnly>
</template>

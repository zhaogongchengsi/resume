<script setup lang='ts'>
const { data } = await useFetch('/api/repositories')
</script>

<template>
  <ClientOnly>
    <RepoSwiper :data="data" />
    <template #fallback>
      <section class="grid my-4 lg:my-8 md:my-6 xl:my-10">
        <div v-for="(item) in data" :key="item.repository">
          <a :href="item.link" target="_blank">
            <h3>{{ item.repository }}</h3>
            <p>{{ item.description }}</p>
            <span>{{ item.language }}</span>
          </a>
        </div>
      </section>
    </template>
  </ClientOnly>
</template>

<style lang='scss'></style>

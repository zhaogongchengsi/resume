<script setup lang="ts">
const query = await queryContent({
  where: {
    _dir: 'blog',
  },
}).find()

const isCn = useIsCn()

const blogs = computed(() => {
  return query.filter(item => isCn.value ? item._path?.startsWith('/cn') : !item._path?.startsWith('/cn'))
})
</script>

<template>
  <section>
    <h2 class="text-block text-2xl font-bold md:text-3xl dark:text-white">
      Blog
    </h2>
    <ul class="mt-4 divide-y divide-zinc-200 dark:divide-zinc-700">
      <li v-for="item in blogs" :key="item._path" class="py-3">
        <nuxt-link :to="item._path" class="block opacity-80 hover:opacity-100">
          <h4 class="text-block text-lg font-bold dark:text-white">
            {{ item.title }}
          </h4>
          <p v-if="item.description" class="mt-1 text-base text-zinc-600 dark:text-zinc-400">
            {{ item.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

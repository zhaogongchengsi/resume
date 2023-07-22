<script setup lang='ts'>
const where = {
  $or: [
    { ignore: false },
    { ignore: { $exists: false } },
  ],
}

const result = await queryContent().where(where).sort({ time: -1 }).find()
</script>

<template>
  <div class="mx-auto my-10 max-w-200 md:my-15">
    <ul v-for="article in result" :key="article._path" class="px-3">
      <li class="border border-zinc-300 rounded-xl dark:border-zinc-600 hover:border-color-purple-600">
        <router-link :to="`article${article._path}`" class="flex flex-col gap-2 px-3 py-4">
          <h2 class="text-4 md:text-5">
            {{ article.title }}
          </h2>
          <p class="text-3 md:text-4">
            {{ article.description }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang='scss'></style>

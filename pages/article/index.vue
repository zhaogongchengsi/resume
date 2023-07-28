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
    <ul class="flex flex-col gap-5 px-3">
      <li v-for="article in result" :key="article._path" tg-name="opacity">
        <router-link :to="`article${article._path}`" class="group relative flex flex-col gap-2 sm:py-3">
          <span class="absolute right-0 top-0 z-1 opacity-50 group-hover:opacity-75">{{ article.time }}</span>
          <div class="z-2 flex flex-col gap-2 opacity-80 group-hover:opacity-95">
            <h2 class="text-5 sm:text-6">
              {{ article.title }}
            </h2>
            <p class="text-3 md:text-5 sm:text-4">
              {{ article.description }}
            </p>
          </div>
          <span class="block w-full text-right text-2 opacity-40">{{ article.author }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

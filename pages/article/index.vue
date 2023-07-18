<script setup lang='ts'>

</script>

<template>
  <div class="mx-auto my-10 max-w-200 md:my-15">
    <ContentList v-slot="{ list }" path="/">
      <ul v-for="article in list" :key="article._path" class="px-3">
        <li v-if="!article.ignore" class="border border-zinc-300 rounded-xl dark:border-zinc-600 hover:border-color-purple-600">
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
    </ContentList>
  </div>
</template>

<style lang='scss'></style>

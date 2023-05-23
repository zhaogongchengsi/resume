<script setup lang="ts">
const { title, introduce, tags } = useResume()
</script>

<template>
  <div class="mx-auto resume-container">
    <div class="flex flex-col items-center justify-center md:flex-row">
      <div class="w-full px-10 md:w-1/2 md:px-0">
        <p>
          <span mr-1 text-12 font-semibold text-purple-700 dark:text-purple-400>Hi</span>
          <span text-7>, i' m</span>
        </p>
        <h2 bg-clip-text text-5 font-semibold uppercase text-transparent md:text-10 class="from-violet-500 to-fuchsia-500 bg-gradient-to-r">
          {{ title }}
        </h2>
        <ol class="mt-3 flex flex-wrap items-center gap-3">
          <li v-for="t of tags" :key="t" class="border border-purple rounded p-1 text-3 text-purple-700 dark:border-purple-400 dark:text-purple-400">
            {{ t }}
          </li>
        </ol>

        <a href="#" class="mt-7 inline-flex items-center rounded-md bg-purple-400 px-2 py-1 text-white shadow transition duration-200 ease-in-out hover:bg-purple-500 hover:shadow-2xl">
          <span class="mr-2 text-5">联系我</span>
          <div class="i-tabler-address-book icon-default" />
        </a>
      </div>
      <div class="w-full flex justify-center md:w-1/2">
        <img src="/ethereum.svg" alt="Web Html">
      </div>
    </div>
  </div>
</template>

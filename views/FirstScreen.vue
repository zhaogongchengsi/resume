<script setup lang='ts'>
const { title, tags } = useResume()
</script>

<template>
  <div class="flex flex-col-reverse items-center justify-center md:flex-row">
    <div class="w-full flex flex-col items-center px-3 md:w-1/2 md:items-start md:px-0">
      <p class="text-center">
        <span
          class="mr-1 text-12 font-semibold text-purple-700 2xl:text-25 lg:text-15 xl:text-20 dark:text-purple-400"
        >Hi</span>
        <span class="text-7 md:text-10">, i' m</span>
      </p>
      <h2
        class="from-violet-500 to-fuchsia-500 bg-gradient-to-r bg-clip-text text-center text-8 font-semibold uppercase text-transparent lg:text-12 md:text-10 xl:text-15"
      >
        {{ title }}
      </h2>
      <ol class="grid grid-cols-2 mt-3 flex-wrap items-center justify-items-center gap-3 md:grid-cols-3 sm:grid-cols-4">
        <li
          v-for="t of tags" :key="t"
          class="w-full border border-purple rounded p-1 text-center text-2 text-purple-700 dark:border-purple-400 md:text-3 dark:text-purple-400"
        >
          {{ t }}
        </li>
      </ol>

      <div class="flex gap-4 lg:gap-6">
        <LinkButton class="mt-7" icon="i-tabler-address-book">
          联系我
        </LinkButton>

        <LinkButton class="mt-7" icon="i-tabler-bat" link="article/index">
          查看文章
        </LinkButton>
      </div>
    </div>
    <div class="flex items-center justify-center sm:w-1/2">
      <img class="w-50 lg:w-120 md:w-100 sm:w-80" src="/home.png" alt="Web Html ">
    </div>
  </div>
</template>

<style lang='scss'></style>

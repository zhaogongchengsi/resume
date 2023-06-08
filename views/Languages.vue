<script setup lang='ts'>
import languagesConfig from '~/constants/languages'

const { data } = await useFetch('/api/languages')
const maxValue = ref(100)
const LanguageStatistics = computed(() => {
  return Object.entries(data.value).map(([name, value]) => {
    if (value > maxValue.value)
      maxValue.value = value
    const config = languagesConfig.find((conf) => {
      return conf.name === name
    })

    return {
      title: name,
      value,
      ...config,
    }
  }).sort((a, b) => {
    return b.value - a.value
  })
})
</script>

<template>
  <div class="my-4 lg:my-8 md:my-6">
    <ul class="flex flex-col gap-4 lg-gap-8 md:gap-6">
      <li v-for="(item) of LanguageStatistics" :key="item.value">
        <div class="mb-3 flex items-center gap-3 md:mb-4">
          <div class="icon-default" :style="{ color: item.color }" :class="item.icon" />
          <h3>{{ item.title }}</h3>
          <span class="ml-auto">{{ item.value }}</span>
        </div>
        <Pillar :color="item.color" :value="item.value" :total="maxValue + 200" />
      </li>
    </ul>
  </div>
</template>

<style lang='scss'></style>

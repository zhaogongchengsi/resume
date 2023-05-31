<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { RepoResponse } from '~/types'

const props = withDefaults(defineProps<{ data?: RepoResponse[] }>(), { data: () => [] })
</script>

<template>
  <div>
    <Swiper
      :slides-per-view="3"
      :space-between="50"
    >
      <SwiperSlide v-for="item of props.data" :key="item.repository">
        <RepoCard :repo="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang='scss'></style>

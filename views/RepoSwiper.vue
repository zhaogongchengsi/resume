<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { RepoResponse } from '~/types'

const props = withDefaults(defineProps<{ data?: RepoResponse[] }>(), { data: () => [] })
</script>

<template>
  <div>
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="{
        780: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
      autoplay
    >
      <SwiperSlide v-for="item of props.data" :key="item.repository">
        <div class="p-2 md:p-3">
          <RepoCard :repo="item" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang='scss'></style>

<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { RepoResponse } from '~/types'

const props = withDefaults(defineProps<{ data?: RepoResponse[] }>(), { data: () => [] })
</script>

<template>
  <div>
    <Swiper
      :slides-per-view="2"
      :space-between="20"
      :breakpoints="{
        780: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
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

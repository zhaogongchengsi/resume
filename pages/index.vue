<script setup lang="ts">
const showId = ref(1)
</script>

<template>
  <div class="home-page-container mx-auto">
    <FirstScreen />

    <div class="my-3">
      <div class="mb-3 flex gap-2 border-b border-zinc-300 dark:border-slate-100/30">
        <div class="home-header-tab" :class="showId === 1 ? `home-header-tab-active` : ''" @click="showId = 1">
          <div class="home-header-tab-icon i-tabler-brand-bunpo" />
          <span class="home-header-tab-title">最近项目</span>
        </div>
        <div class="home-header-tab" :class="showId === 2 ? `home-header-tab-active` : ''" @click="showId = 2">
          <div class="home-header-tab-icon i-tabler-chart-line" />
          <span class="home-header-tab-title">语言使用情况</span>
        </div>
      </div>
      <div class="mt-2">
        <TransitionGroup tag="ul" name="fade">
          <div
            v-show="showId === 1" :key="1" class="transition-opacity"
          >
            <Repositories />
          </div>
          <div
            v-show="showId === 2" :key="2" class="transition-opacity"
          >
            <Languages />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-header-tab {
  @apply px-3 py-2 gap-2 md: px-4 md:py-3 flex md:gap-3 items-center;
  @apply rounded-tl-lg rounded-tr-lg border border-b-none border-zinc-300 dark: border-slate-100/30;
  @apply cursor-pointer;

  &-icon {
    @apply w-5 h-5 md: w-8 md:h-8;
  }

  &-title {
    @apply text-3 md: text-5;
  }

  &-active {
    border-color: #a855f7 !important;
    border-bottom: 1px solid #a855f7 !important;

    .home-header-tab-title {
      color: #a855f7 !important;
    }

    .home-header-tab-icon {
      color: #a855f7 !important;
    }
  }

}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .fade-container,
.fade-leave-to .fade-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

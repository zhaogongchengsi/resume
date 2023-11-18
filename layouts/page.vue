<template>
  <div class="app-page_page">
    <app-header />
    <article class="app-page_container mx-auto my-5 max-w-200 area-x">
      <slot />
    </article>
    <app-footer />
  </div>
</template>

<style lang="scss">
.app-page_container {
  min-height: calc(100vh - $dt('page.header.height') - $dt('page.footer.height'));
}
</style>

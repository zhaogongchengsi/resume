<template>
  <div class="app-default-page">
    <app-header />
    <article class="app-default-container area-x mx-auto my-5 max-w-200">
      <slot />
    </article>
    <app-footer />
  </div>
</template>

<style lang="scss">
.app-default-container {
  min-height: calc(100vh - $dt('page.header.height') - $dt('page.footer.height'));
}
</style>

<template>
  <p class="prose-p my-2 text-sm font-light md:my-4 md:text-base">
    <slot />
  </p>
</template>

<style lang="scss">
.prose-p {
	--a-backgroud-color: rgba(196, 36, 36, 0.641);
  a {
    background: linear-gradient(
      	to bottom,
		transparent 0%,
		transparent 50%,
		var(--a-backgroud-color) 50%,
		var(--a-backgroud-color) 100%
    );
  }
}
</style>

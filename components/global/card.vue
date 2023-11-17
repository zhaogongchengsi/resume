<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
const target = ref(null)
const cursor = reactive({ x: 0, y: 0 })
const { elementX, elementY } = useMouseInElement(target)

watch([elementX, elementY], ([x, y]) => {
  cursor.x = x
  cursor.y = y
})
</script>

<template>
  <div
    ref="target" class="card-container" :style="{
      '--cursor-x': `${cursor.x}px`,
      '--cursor-y': `${cursor.y}px`,
    }"
  >
    <div class="card-content p-2 md:p-4 sm:p-3">
      <component :is="icon" v-if="icon" />
      <slot />
      <div class="my-2">
        <h3 class="text-lg font-bold dark:text-white">
          <ContentSlot :use="$slots.title" unwrap="p">
            Card title
          </ContentSlot>
        </h3>
        <p class="text-base">
          <ContentSlot :use="$slots.description" unwrap="p">
            Card description
          </ContentSlot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-container {
  --border:1px;
  padding: var(--border);
  position: relative;
  box-shadow: $dt('card.boxShadow');
  border-radius: $dt('card.borderRadius');
  background: $dt('card.background.container');
  overflow: hidden;

  .card-content {
 	height: 100%;
	width: 100%;
	border-radius: $dt('card.borderRadius');
	background: $dt('card.background.content');
  }

  --card-center: calc($dt('card.shine.size') / 2);

   &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    transform-origin: center;
    transition: opacity 400ms ease 0s;
    will-change: background, opacity;
    background-color: rgba(90, 194, 194, 0.068);

    width: $dt('card.shine.size') ;
    height: $dt('card.shine.size') ;
    opacity: $dt('card.shine.opacity');
    transform: translate(calc(var(--cursor-x) - var(--card-center)), calc(var(--cursor-y) - var(--card-center)));

    background: radial-gradient(
      $dt('card.shine.size') circle at var(--cursor-x) var(--cursor-y),
	  rgba(0, 71, 225, 0.2),
	 rgba(255, 255, 255, 0)
	);

    // background: radial-gradient(800px circle, rgba(255, 255, 255, 0.1), transparent 40%);
  }
}
</style>

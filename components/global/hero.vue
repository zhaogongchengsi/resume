<template>
  <section>
    <h1 class="mb-4 text-2xl font-bold text-white">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <slot name="description" />
    <slot />
  </section>
</template>

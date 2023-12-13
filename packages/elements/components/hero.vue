<template>
  <section>
    <h1 class="text-block mb-4 text-4xl font-bold dark:text-white">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <slot name="description" />
    <slot />
  </section>
</template>

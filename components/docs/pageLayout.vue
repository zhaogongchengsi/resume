<script setup lang="ts">
const { page } = useContent()
const { config, tree } = useDocus()
const route = useRoute()

function fallbackValue(value: string, fallback = true) {
  if (typeof page.value?.[value] !== 'undefined')
    return page.value[value]
  return fallback
}

const hasBody = computed(() => !page.value || page.value?.body?.children?.length > 0)
const hasToc = computed(() => page.value?.toc !== false && page.value?.body?.toc?.links?.length >= 2)

const hasAside = computed(() => page.value?.aside !== false && (tree.value?.length > 1 || tree.value?.[0]?.children?.length))
const bottom = computed(() => fallbackValue('bottom', true))
const isOpen = ref(false)

/*
** This below is a workaround until Nuxt has a proper support for layouts and Suspense
*/
const asideNav = ref<any>(null)

function getParentPath() {
  return route.path.split('/').slice(0, 2).join('/')
}
const asideScroll = useState('asideScroll', () => {
  return {
    parentPath: getParentPath(),
    scrollTop: asideNav.value?.scrollTop || 0,
  }
})

function watchScrollHeight() {
  if (!asideNav.value)
    return
  if (asideNav.value.scrollHeight === 0)
    setTimeout(watchScrollHeight, 0)

  asideNav.value.scrollTop = asideScroll.value.scrollTop
}

onMounted(() => {
  if (asideScroll.value.parentPath !== getParentPath()) {
    asideScroll.value.parentPath = getParentPath()
    asideScroll.value.scrollTop = 0
  }
  else {
    watchScrollHeight()
  }
})

onBeforeUnmount(() => {
  if (!asideNav.value)
    return
  asideScroll.value.scrollTop = asideNav.value.scrollTop
})
</script>

<template>
  <Container
    :fluid="config?.main?.fluid"
    :padded="config?.main?.padded"
    class="docs-page-content"
    :class="{
      'fluid': config?.main?.fluid,
      'has-toc': hasToc,
      'has-aside': hasAside,
    }"
  >
    <!-- Aside -->
    <aside
      v-if="hasAside"
      ref="asideNav"
      class="aside-nav"
    >
      <DocsAside class="app-aside" />
    </aside>

    <!-- Page Body -->
    <article class="page-body">
      <slot v-if="hasBody" />
      <Alert
        v-else
        type="info"
      >
        Start writing in <ProseCodeInline>content/{{ page._file }}</ProseCodeInline> to see this page taking shape.
      </Alert>
      <template v-if="hasBody && page && bottom">
        <DocsPageBottom />
        <DocsPrevNext />
      </template>
    </article>

    <!-- TOC -->
    <div
      v-if="hasToc"
      class="toc"
    >
      <div class="toc-wrapper">
        <button @click="isOpen = !isOpen">
          <span class="title">Table of Contents</span>
          <Icon
            name="heroicons-outline:chevron-right"
            class="icon"
            :class="[isOpen && 'rotate']"
          />
        </button>

        <div
          class="docs-toc-wrapper"
          :class="[isOpen && 'opened']"
        >
          <DocsToc @move="isOpen = false" />
        </div>
      </div>
    </div>
  </Container>
</template>

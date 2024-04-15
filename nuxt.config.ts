export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/main.scss',
    '~/assets/theme.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: ['zhaozunhong', 'Resume', 'ZZH Resume', 'blog', 'zzh blog', 'Vue', 'React', 'Web Development', 'open source development'].join(' ') },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  components: [
    {
      prefix: 'ui',
      path: '~/components/ui',
    },
    {
      prefix: 'app',
      path: '~/components/app',
    },
    {
      prefix: '',
      path: '~/components/icons',
      global: true,
    },
  ],

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
    navigation: {
      fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer'],
    },
  },

  devServer: {
    port: 3005,
  },

  devtools: {
    enabled: true,
  },

  typescript: { includeWorkspace: true },
})

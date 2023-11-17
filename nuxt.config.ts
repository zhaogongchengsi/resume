import head from './config/head'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxthq/studio',
    'pinceau/nuxt',
  ],

  extends: [
    // '@nuxt-themes/elements',
    // '@nuxt-themes/typography',
  ],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/main.scss',
    '~/assets/prose.scss',
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
    head,
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
      path: '~/components/global',
      global: true,
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
    host: '0.0.0.0',
  },

  devtools: {
    enabled: true,
  },
})

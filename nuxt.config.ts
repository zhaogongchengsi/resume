import head from './config/head'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxthq/studio',
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
      prefix: '',
      path: '~/components/app',
      global: true,
    },
    {
      prefix: '',
      path: '~/components/docs',
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

  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'en',
  },

  devServer: {
    port: 3005,
    host: '0.0.0.0',
  },

  devtools: {
    enabled: true,
  },
})

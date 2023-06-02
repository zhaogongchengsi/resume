import head from './config/head'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/content',
  ],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/main.scss',
    'swiper/css',
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

  components: {
    dirs: [{
      path: '~/views',
      global: true,
    }, '~/components'],
  },

  // imports: {
  //   dirs: [''],
  // },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: [
        'js',
        'ts',
        'css',
        'html',
        'shell',
      ],
    },
    documentDriven: true,
  },

  devServer: {
    port: 3005,
    host: '0.0.0.0',
  },

  devtools: {
    enabled: true,
  },
})

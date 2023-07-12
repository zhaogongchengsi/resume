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
        'go',
      ],
    },
    documentDriven: true,
    // sources: {
    //   github: {
    //     prefix: '/blog', // Prefix for routes used to query contents
    //     driver: 'github', // Driver used to fetch contents (view unstorage documentation)
    //     repo: '<owner>/<repo>',
    //     branch: 'main',
    //     dir: 'content', // Directory where contents are located. It could be a subdirectory of the repository.
    //     // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
    //   },
    // },
  },

  devServer: {
    port: 3005,
    host: '0.0.0.0',
  },

  devtools: {
    enabled: true,
  },
})

export default {
  viewport: 'width=device-width,initial-scale=1',
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    // { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
    // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ],
  script: [
    { src: '/trigger.js' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: ['Resume', 'ZZH Resume', 'blog', 'zzh blog'].join(' ') },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  ],
}

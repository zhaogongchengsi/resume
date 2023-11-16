export default {
  viewport: 'width=device-width,initial-scale=1',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
  ],
  script: [
    // see https://github.com/triggerjs/trigger
    { src: '/trigger.js', defer: true },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: ['Resume', 'ZZH Resume', 'blog', 'zzh blog'].join(' ') },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  ],
}

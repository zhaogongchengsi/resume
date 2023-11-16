import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-purple-600 text-white cursor-pointer hover:bg-purple-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-purple-600'],
    ['resume-container', 'w-full px-3 md:px-1 lg:w-320 lg:px-0'],
    ['article-container', 'w-full px-3 md:px-2 lg:px-2 lg:w-200 lg:w-300 xl:w-350 2xl:w-400'],
    ['icon-default', 'w-5 h-5 md:w-7 md:h-7'],
    ['icon-large', 'w-8 h-8 md:w-10 md:h-10'],
    ['a-border', 'border rounded md:rounded-md border-purple-700 hover:border-purple-500'],
    ['a-shadow', 'shadow hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-gray-100/20'],
    ['a-glass', 'backdrop-blur bg-slate-400/30'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography({
      cssExtend: {
        pre: {
          'padding': '1.25rem 1.5rem',
          'overflow-x': 'visible',
          'border-radius': '.375rem',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  include: [
    './pages/**/*',
    './components/**/*',
    './composables/**/*',
    './views/**/*',
    './layouts/**/*',
    './content/**/*',
    './assets/**/*.[css|scss]',
  ],
})

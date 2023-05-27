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
    ['article-container', 'w-full px-3 md:px-2 lg:px-0 lg:w-200 lg:w-300 xl:w-350 2xl:w-400'],
    ['icon-default', 'w-6 h-6 md:w-8 md:h-8'],
    ['icon-large', 'w-8 h-8 md:w-10 md:h-10'],
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
          'overflow-x': 'auto',
          'border-radius': '.375rem',
          'backgroud-color': 'red',
          'border': '1px solid var(--pre-border-color)',
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
})

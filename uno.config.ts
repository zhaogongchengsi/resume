import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['primary-icon', 'w-4 h-4 md:w-5 md:h-5 block'],
    ['area-x', 'px-3'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
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
    './packages/**/*',
  ],
})

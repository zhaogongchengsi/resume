import en from './locales/en.json'
import cn from './locales/cn.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    cn,
    en,
  },
  vueI18nLoader: true,
}))

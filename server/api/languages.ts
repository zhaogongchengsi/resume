import type { languages } from '~/types'

const ls: languages[] = [{ TypeScript: 1231, JavaScript: 123 }, { TypeScript: 1231, Vue: 123, Css: 123 }, { Scss: 1231, JavaScript: 123 }]

export default defineEventHandler(async () => {
  return statisticsLanguages(ls)
})

function statisticsLanguages(ls: languages[]): languages {
  return ls.reduce((pre, cur) => {
    for (const [name, value] of Object.entries(cur)) {
      const old = Reflect.get(pre, name)
      if (old)
        Reflect.set(pre, name, old + value)

      else
        Reflect.set(pre, name, value)
    }
    return pre
  }, {})
}

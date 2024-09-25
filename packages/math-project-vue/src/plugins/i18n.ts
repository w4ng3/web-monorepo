import type { App, InjectionKey } from 'vue'

const dictionary = {
  zh: {
    hello: '你好哇!',
    MilkyWay: '银河',
  },
  en: {
    hello: 'Hello!',
    MilkyWay: 'The Milky Way',
  },
}

export const $i18n = Symbol('i18n') as InjectionKey<typeof dictionary>

export default {
  install: (app: App<Element>) => {
    app.provide($i18n, dictionary)
  },
}

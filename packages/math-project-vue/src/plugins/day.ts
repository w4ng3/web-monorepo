import type { App, InjectionKey } from 'vue'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import localeData from 'dayjs/plugin/localeData'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/zh-cn'

dayjs.extend(isLeapYear) // 是否是闰年
dayjs.extend(localeData) // 本地化数据
dayjs.extend(relativeTime) // 相对时间
dayjs.extend(timezone) // 猜测用户所在时区
dayjs.extend(utc) // 使用 UTC 模式来解析和展示时间
dayjs.locale('zh-cn')

export const $dayjs = Symbol('dayjs') as InjectionKey<typeof dayjs>

export default {
  install: (app: App<Element>): void => {
    // 方式1（不推荐，请谨慎）: 使用全局属性 【若要在setup 里调用，要使用一个内部api: getCurrentInstance 】
    // app.config.globalProperties.$dayjs = dayjs;
    // 方式2： provide / inject
    app.provide($dayjs, dayjs)
  },
}

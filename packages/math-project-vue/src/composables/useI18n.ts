// 多语言

import { $i18n } from '@/plugins/i18n'
import { computed, inject, ref } from 'vue'

type Local = 'zh' | 'en'

const local = ref<Local>('zh') // 在外面定义可以保持状态

export const useI18n = () => {
  const i18n = inject($i18n)!

  const $t = computed(() => i18n[local.value])

  const setLocal = (type: Local) => {
    local.value = type
  }

  return { local, setLocal, $t }
}

// 了解基本原理后，尝试下成熟的国际化插件 https://kazupon.github.io/vue-i18n/zh/
// 这个插件可以用多种格式配置语言文件 https://www.npmjs.com/package/@intlify/unplugin-vue-i18n
// 看看托尼的仓库 https://github.com/antfu-collective/vitesse/blob/main/locales/README.md

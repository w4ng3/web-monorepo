<script lang="ts" setup>
import { useI18n } from '@/composables/useI18n'

// const i18n = inject($i18n)!

// // 现在可以查询字典了
// // console.log('hello :>> ', i18n.en.hello);

// // 添加语言切换
// type Local = 'zh' | 'en'
// const local = ref<Local>('zh')
// const $t = computed(() => i18n[local.value])

// const setLocal = (type: Local) => {
//   local.value = type
// }

// -------使用组合式函数-----------
const { setLocal, $t } = useI18n()
</script>

<template>
  <nav mt-10 flex justify-center gap-2>
    <button h-10 btn @click="setLocal('zh')">
      中文
    </button>
    <button h-10 btn @click="setLocal('en')">
      English
    </button>
  </nav>

  <h1>{{ $t.hello }} {{ $t.MilkyWay }}</h1>
</template>

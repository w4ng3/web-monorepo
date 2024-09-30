<script lang="ts" setup>
import { useI18n as useMyI18n } from '@/composables/useI18n'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { setLocal, $t: $myt } = useMyI18n()

const { locale, t } = useI18n()
const whatsyouname = computed(() => {
  return t('intro.whats-your-name')
})
</script>

<template>
  <div>-------使用自定义 i18n-----------</div>
  <nav mt-10 flex justify-center gap-2>
    <button h-10 btn @click="setLocal('zh')">
      中文
    </button>
    <button h-10 btn @click="setLocal('en')">
      English
    </button>
  </nav>
  <h1>{{ $myt.hello }} {{ $myt.MilkyWay }}</h1>

  <div>-------使用 Vue i18n-----------</div>
  <h1>{{ $t('intro.desc') }}</h1>
  <h2>{{ $t('button.back') }}</h2>
  <h2>{{ whatsyouname }}  ---   {{ locale }}</h2>
  <div class="m-auto">
    <select v-model="$i18n.locale" class="h-10 w-20 text-2xl">
      <option v-for="opt in $i18n.availableLocales" :key="`locale-${opt}`" :value="opt">
        {{ opt }}
      </option>
    </select>
  </div>
</template>

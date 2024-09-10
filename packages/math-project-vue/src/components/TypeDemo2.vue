<script lang="ts" setup>
import { key } from '@/types/app'
import { inject, watchEffect } from 'vue'

// 1.为组件的 props 标注类型
const { name = 'd' } = defineProps<{
  name?: string
}>()

// 2.为组件的 emits 标注类型
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()

watchEffect(() => {
  // 每次父组件中的 count 属性变化时都会触发这个日志
  console.log(name)
})

function handleChange() {
  emit('change', 114)
}

// 6.为 provide / inject 标注类型
const foo = inject(key) // foo 的类型：string | undefined


defineExpose({
  name: 'DEMO2',
})
</script>

<template>
  <div style="background-color: pink;">
    <p>子组件：{{ name }}</p>
    <div>
      {{ foo }}
    </div>
    <button @click="handleChange">
      onClick
    </button>
  </div>
</template>

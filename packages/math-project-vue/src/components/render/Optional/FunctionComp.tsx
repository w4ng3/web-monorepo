import type { SetupContext, SlotsType, VNode } from 'vue'
import { defineComponent, ref } from 'vue'

// 函数语法 (需要 3.3+)
// https://cn.vuejs.org/api/general.html#definecomponent
// 使用 defineComponent 可以更好地推导组件的 props 和 emits 类型。这使得 TypeScript 能够提供更好的类型检查和自动补全。


interface Props {
  msg?: string
  list: number[]
}

interface Events {
  sendMsg: (message: string) => void
}

type Slots = SlotsType<{
  default: () => VNode[] | string
  footer: { data: number }
}>

export const FunctionComp = defineComponent((props: Props, context: SetupContext<Events, Slots>) => {
  // 就像在 <script setup> 中一样使用组合式 API
  const { emit, slots, attrs, expose } = context
  // 可在解构里设置可选项的默认值
  const { msg = '王東', list } = props

  const count = ref(0)

  function emitMsg() {
    count.value -= -1
    return emit('sendMsg', count.value.toString())
  }
  expose({
    count,
  })

  return () => {
    // 渲染函数或 JSX
    return (
      <div class="rounded bg-amber-3">
        <div>{count.value}</div>
        <div>{list}</div>
        <button onClick={emitMsg}>{msg}</button>
        {/* 默认插槽 */}
        <div {...attrs}>{slots.default()}</div>
        {/* 具名插槽 */}
        <div>{slots.footer({ data: 4396 })}</div>
      </div>
    )
  }
},
// 目前仍然需要手动声明运行时的 props
{
  name: 'FunctionComp',
  props: ['list', 'msg'],
  emits: {
    sendMsg: (value: string) => value,
  },
  slots: {} as Slots,
  inheritAttrs: false, // 配合 attrs 使用
})

// 参考 https://segmentfault.com/q/1010000043673705

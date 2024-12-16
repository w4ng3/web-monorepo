<script lang="tsx" setup>
// import type { ComponentExposed } from 'vue-component-type-helpers'
import vueSvg from '@/assets/vue.svg'
import FComponent from '@/components/render/FComponent'
import CardWidget from '@/components/render/mixin/CardWidget.vue'
import Foo from '@/components/render/mixin/Foo.setup'
import RenderVue from '@/components/render/mixin/RenderVue.vue'
import { FunctionComp } from '@/components/render/Optional/FunctionComp'
import RenderComp from '@/components/render/Optional/RenderComp'
import SetupComp from '@/components/render/Optional/SetupComp'
import { h, ref, useTemplateRef } from 'vue'

const Hdiv = h('div', { id: 'foo' }, ['why so serious', h('span', { style: { color: 'cyan' } }, ['?'])])

const JsxWidget = (
  <>
    <img src={vueSvg} alt="Vue logo" />
  </>
)

function RenderDiv() {
  const items = ref([{ id: 1, text: '王一' }, { id: 2, text: '王二' }, { id: 3, text: '王三' }])
  return (
    <ul class="bg-white">
      {items.value.map(({ id, text }) => {
        return <li key={id}>{text}</li>
      })}
    </ul>
  )
}

// 选项式写法
const OptionalFoo = {
  props: ['text'],
  setup() {
    const count = ref(0)
    return { count }
  },
  render(ctx: any) {
    // 必须调用 ctx
    return (
      <>
        <div>{`${ctx.text}:${ctx.count}`}</div>
        <button onClick={() => ctx.count++}>onClick</button>
      </>
    )
  },
}

function getMeg(params: string) {
  // eslint-disable-next-line no-alert
  alert(params)
}

const comRef = useTemplateRef<InstanceType<typeof FunctionComp>>('comRef')
function aaa() {
  // @ts-ignore
  comRef.value!.count++
}

const renderRef = useTemplateRef<InstanceType<typeof RenderComp>>('renderRef')
</script>

<template>
  <div class="grid grid-cols-3 gap-2">
    <Hdiv class="bg-red" />
    <JsxWidget />
    <OptionalFoo text="计数" />
    <RenderDiv />
    <FComponent message="函数式组件" @send-message="getMeg" />
    <FunctionComp ref="comRef" msg="w4ng3" :list="[1, 2, 3]" class="bg-cyan" @send-msg="getMeg">
      <div class="cursor-pointer text-pink" @click="aaa">
        默认插槽，click here
      </div>
      <template #footer="slotProps">
        <div>footer {{ slotProps.data }}</div>
      </template>
    </FunctionComp>
    <RenderComp ref="renderRef" type="success" message="一个旅人" class="bg-red text-#9353f8" @go="getMeg">
      最后的终局如何？
    </RenderComp>
    <SetupComp type="success" message="一个旅人">
      急不可待的欲知下文
    </SetupComp>
    <CardWidget author="王小波" title="红拂夜奔" date="1997" />
    <RenderVue author="王二" title="黄金时代" />
    <Foo foo="HELLO" />
  </div>
  <div @click="() => renderRef?.abc()">
    {{ renderRef?.title }}
  </div>
</template>

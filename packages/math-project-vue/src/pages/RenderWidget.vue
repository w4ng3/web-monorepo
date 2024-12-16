<script lang="tsx" setup>
import vueSvg from '@/assets/vue.svg'
import { h, ref } from 'vue'

const hdiv = h('div', { id: 'foo' }, ['why so serious', h('span', { style: { color: 'cyan' } }, ['?'])])

const Jsxtest = (
  <>
    <img src={vueSvg} alt="Vue logo" />
  </>
)

const Foo = {
  setup() {
    const count = ref(0)
    return { count }
  },
  render(ctx: any) {
    // 必须调用 ctx
    return (
      <>
        <div>{ctx.count}</div>
        <button onClick={() => ctx.count++}>onClick</button>
      </>
    )
  },
}

function RenderDiv() {
  return (
    <div class="bg-red text-yellow-2">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
}
</script>

<template>
  <hdiv class="bg-red" />
  <Jsxtest />
  <Foo />
  <RenderDiv />
</template>

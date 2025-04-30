import type { OptionalSlots } from './optionalProps'
import { computed, defineComponent } from 'vue'
import { FunctionComp } from './FunctionComp'
import { optionalProps } from './optionalProps'

const RenderComp = defineComponent({
  name: 'RenderComp',
  props: optionalProps,
  inheritAttrs: false,
  slots: {} as OptionalSlots,
  emits: {
    go: (value: string) => value,
  },
  // @ts-ignore
  // eslint-disable-next-line unused-imports/no-unused-vars
  setup(props, { slots, emit, expose, attrs }) {
    const title = computed(() => `如果在冬夜⚡️${props.message}`)

    function abc() {
      // eslint-disable-next-line no-alert
      prompt('1234')
    }
    expose({
      title,
      abc,
    })
    return {
      title,
      abc,
    }
  },
  render() {
    const { $props, $emit, $attrs, $slots } = this
    return (
      <div>
        <div class="bg-purple text-white">render return</div>
        <h1
          class="cursor-pointer text-2xl"
          v-show={$props.type === 'success'}
          onClick={() => $emit('go', this.title)}
        >
          {`${this.title}`}
        </h1>
        <p>
          月光照耀在落叶上
        </p>
        <h2 {...$attrs}>
          在墓穴的周围
        </h2>
        <div>{$slots.default()}</div>
        <FunctionComp msg="1234" list={[7, 6, 5]}>
          {{
            default: () => 'joker',
            footer: () => 'footer',
            $stable: true, // 作用待验证 https://juejin.cn/post/6913855965792043021#heading-23
          }}
        </FunctionComp>
      </div>
    )
  },
})


export default RenderComp

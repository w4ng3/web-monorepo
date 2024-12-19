import type { OptionalSlots } from './optionalProps'
import { computed, defineComponent } from 'vue'
import { optionalProps } from './optionalProps'


function AComp(props: { title: string }) {
  const { title } = props
  return (
    <div class="bg-purple text-white">{title}</div>
  )
}

const SetupComp = defineComponent({
  name: 'SetupComp',
  props: optionalProps,
  inheritAttrs: false,
  slots: {} as OptionalSlots,
  emits: {
    go: (value: string) => value,
  },

  setup(props, { slots, emit, expose, attrs }) {
    const title = computed(() => `如果在冬夜⚡️${props.message}`)

    expose({
      title,
    })

    return () => (
      <div class="bg-pink">
        <AComp title="setup return" />
        <h1
          class="cursor-pointer text-2xl"
          v-show={props.type === 'success'}
          onClick={() => emit('go', title.value)}
        >
          {`${title.value}`}
        </h1>
        <p>
          月光照耀在落叶上
        </p>
        <h2 {...attrs}>
          在墓穴的周围
        </h2>
        <div>{slots.default && slots.default()}</div>
      </div>
    )
  },
})

export default SetupComp

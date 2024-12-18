// 函数式组件: 一种定义自身没有任何状态的组件的方式
// 函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 this)，也不会触发常规的组件生命周期钩子。

import type { SetupContext } from 'vue'

interface FComponentProps {
  message: string
}

interface Events {
  sendMessage: (message: string) => void
}

function FComponent(
  props: FComponentProps,
  context: SetupContext<Events>,
) {
  const { message } = props
  const { emit } = context
  return (
    <button onClick={() => emit('sendMessage', message)}>
      {message}
    </button>
  )
}

FComponent.props = {
  message: {
    type: String,
    required: true,
  },
}

FComponent.emits = {
  sendMessage: (value: unknown) => typeof value === 'string',
}


export default FComponent

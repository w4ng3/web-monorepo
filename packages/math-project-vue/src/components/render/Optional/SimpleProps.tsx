import type { JSX } from 'vue/jsx-runtime'
import { ref } from 'vue'
import { defineFunctionalComponent, useClassAndStyle } from 'vue-simple-props'


// TIPS
// defineFunctionalComponent 内 expose出去的东西没有提供类型

interface Props {
  foo: string // Others are props.
  onClick: () => void // Starts with on for event handlers.
  renderDefault?: () => JSX.Element // Starts with render for slots. 默认插槽
  renderFoo?: (data: string) => JSX.Element // 具名插槽
}

const Comp = defineFunctionalComponent(
  (props: Props, { expose }) => {
    const firstRef = ref('wang')
    const styles = useClassAndStyle() // 获取传递给组件的 class 和 style
    expose({
      firstRef,
    })
    return () => (
      <div {...styles} class="p2">
        <div>...{props.foo}</div>
        <button onClick={props.onClick}>OnClick</button>
        <div class="h-10 flex items-center justify-center bg-cyan">{props.renderDefault && props.renderDefault()}</div>
        <div>{ props.renderFoo && props.renderFoo('4396') }</div>
        <div>{ firstRef.value }</div>
      </div>
    )
  },
  {
    // other options, e.g. name, inheritAttrs, etc.
  },
)

export default Comp



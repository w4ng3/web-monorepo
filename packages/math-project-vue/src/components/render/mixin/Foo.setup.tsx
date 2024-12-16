// setupSFC 目前处于实验阶段，且在组件使用时缺少类型提示

const props = defineProps<{
  foo: string
}>()

defineEmits<{
  (evt: 'change'): void
}>()

const Foo = () => (
  <div>
    <h1>
      {props.foo}, Setup TSX
    </h1>
  </div>
)


export default Foo

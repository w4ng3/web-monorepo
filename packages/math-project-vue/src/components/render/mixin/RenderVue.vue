<script setup lang="tsx">
interface Props {
  author: string
  title: string
}

const { author, title } = defineProps<Props>()

// 可以直接传递 JSX
defineRender(
  <div class="bg-teal-4">
    <span>Hello Vue Macros</span>
    <div>体验超现代 Vue</div>
    <div>{ `${author} - <${title}>` }</div>
  </div>,
)

// 或使用渲染函数
// defineRender(() => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// })
</script>

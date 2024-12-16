/* eslint-disable ts/no-unused-expressions */
/* eslint-disable react-refresh/only-export-components */
import type { ExtractPublicPropTypes } from 'vue'
import { createApp, defineComponent } from 'vue'

const showMsgProps = {
  title: String,
  content: {
    type: String,
    required: true,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  showCancle: {
    type: Boolean,
    default: true,
  },
  showConfirm: {
    type: Boolean,
    default: true,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  onCancel: Function,
  onConfirm: Function,
} as const

type ShowMsgProps = ExtractPublicPropTypes<typeof showMsgProps>

const ShowMsgWidget = defineComponent({
  props: showMsgProps,
  setup(props) {
    const { title, content, closeable, showIcon, showCancle, showConfirm } = props
    function handleCancle() {
      void Promise.resolve(props.onCancel?.())
    }
    function handleConfirm() {
      void Promise.resolve(props.onConfirm?.())
    }
    return () => (
      <div
        class="absolute left-0 top-0 z999 h-full w-full flex content-center items-center bg-#3e36487a"
      >
        <div class="relative ma w-100 overflow-hidden rounded-xl bg-#e1e1e1 p-10">
          <div
            v-if={closeable}
            class="i-carbon-close-large absolute right-5 top-5 size-10 cursor-pointer"
            onClick={handleCancle}
          />
          <div class="flex items-center gap-3 text-xl">
            <div
              v-if={showIcon}
              class="i-carbon-warning-filled mb-a size-10"
            />
            <div class="flex-1">
              <p v-if={title}>
                { title }
              </p>
              <div class="w-full break-words">
                { content }
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-center gap-10">
            <button
              v-if={showCancle}
              class="cursor-pointer rounded-sm bg-red px-12 text-white"
              onClick={handleCancle}
            >
              取消
            </button>
            <button
              v-if={showConfirm}
              class="cursor-pointer rounded-sm border-none bg-primary px-12 text-white"
              onClick={handleConfirm}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    )
  },
})

export function showMsg(options: ShowMsgProps) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // 渲染组件到界面上
  const app = createApp(ShowMsgWidget, {
    ...options,
    onCancel: () => {
      options.onCancel ? options.onCancel() : null
      app.unmount()
      div.remove()
    },
    onConfirm: () => {
      options.onConfirm ? options.onConfirm() : null
      app.unmount()
      div.remove()
    },
  })
  app.mount(div)
}

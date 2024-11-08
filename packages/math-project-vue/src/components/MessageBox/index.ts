import { createApp } from 'vue'
import MessageBox from './MessageBox.vue'

export interface MessageBoxProps {
  /** 标题 */
  title?: string
  /** 内容 */
  content: string
  /** 可关闭 */
  closeable?: boolean
  /** 显示取消按钮 */
  showCancle?: boolean
  /** 显示确定按钮 */
  showConfirm?: boolean
  /** 显示Icon图标 */
  showIcon?: boolean
}

interface MessageBoxOptions extends MessageBoxProps {
  onCancel?: Function
  onConfirm?: Function
}

export function showMsg(options: MessageBoxOptions) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // 渲染组件到界面上
  const app = createApp(MessageBox, {
    ...options,
    onCancel: () => {
      // eslint-disable-next-line ts/no-unused-expressions
      options.onCancel ? options.onCancel() : null
      app.unmount()
      div.remove()
    },
    onConfirm: () => {
      // eslint-disable-next-line ts/no-unused-expressions
      options.onConfirm ? options.onConfirm() : null
      app.unmount()
      div.remove()
    },
  })
  app.mount(div)
}

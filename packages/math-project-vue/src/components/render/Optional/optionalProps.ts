import type { ExtractPublicPropTypes, PropType, SlotsType, VNode } from 'vue'

// TypeScript 工具类型: https://cn.vuejs.org/api/utility-types

const optionalProps = {
  type: {
    type: String as PropType<'info' | 'success' | 'warning' | 'error' | 'default'>,
    default: 'default',
  },
  message: String,
  private: Boolean,
} as const

export type OptionalProps = ExtractPublicPropTypes<typeof optionalProps>

export type OptionalSlots = SlotsType<{
  default: () => VNode[] | string
  footer: { data: number }
}>


export {
  optionalProps,
}



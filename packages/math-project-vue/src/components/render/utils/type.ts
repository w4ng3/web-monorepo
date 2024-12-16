
// 返回 Event类型，添加 on前缀，小驼峰命名

type EventsType<T extends Record<string, (...args: any[]) => any>> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: T[K]
}

interface Event {
  sendMsg: (message: string) => void
  cancle: () => void
}

type WidgetEvents = EventsType<{ [K in keyof Event]: Event[K] }>

// {
//   onSendMsg: (message: string) => void;
//   onCancle: () => void;
// }

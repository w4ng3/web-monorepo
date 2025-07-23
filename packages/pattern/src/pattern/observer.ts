// 观察者模式
// 使用观察者模式，我们可以将某些对象（观察者）订阅到另一个对象，称为可观察对象。每当事件发生时，可观察对象都会通知其所有观察者！


// 一个可观察对象通常包含 3 个重要部分：
// observers每当特定事件发生时都会收到通知的观察者数组
// subscribe()：一种将观察者添加到观察者列表的方法
// notify()：每当特定事件发生时通知所有观察者的方法

class Observable {
  observers: Function[]
  constructor() {
    this.observers = []
  }

  subscribe(func: Function) {
    this.observers.push(func)
  }

  unsubscribe(func: Function) {
    this.observers = this.observers.filter(obs => obs !== func)
  }

  notify(data: any) {
    this.observers.forEach(observer => observer(data))
  }
}

export default new Observable()

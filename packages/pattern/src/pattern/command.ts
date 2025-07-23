// 使用 Command Pattern，我们可以将执行特定任务的对象与调用该方法的对象解耦
class OrderManager {
  orders: any[]
  constructor() {
    this.orders = []
  }

  // 此方法将执行它给定的任何命令
  execute(command: Command, ...args: any[]) {
    return command.excute(this.orders, ...args)
  }
}

class Command {
  constructor(public excute: Function) {
    this.excute = excute
  }
}

function placeOrderCommand(order: string, id: string) {
  return new Command((orders: any[]) => {
    orders.push(id)
    console.log(`You have successfully ordered ${order} (${id})`)
  })
}

function CancelOrderCommand(id: string) {
  return new Command((orders: any[]) => {
    orders = orders.filter(order => order !== id)
    console.log(`You have canceled your order ${id}`)
  })
}

function TrackOrderCommand(id: string) {
  return new Command(() =>
    console.log(`Your order ${id} will arrive in 20 minutes.`),
  )
}

const manager = new OrderManager()
manager.execute(placeOrderCommand('Pad Thai', '1234'))
manager.execute(TrackOrderCommand('1234'))
manager.execute(CancelOrderCommand('1234'))

// 优点；
// 命令模式允许我们将方法与执行作的对象解耦。如果您正在处理具有一定生命周期的命令，或者应该在特定时间排队和执行的命令，它可以为您提供更多控制权
// 缺点：
// 命令模式的用例非常有限，并且通常会向应用程序添加不必要的样板。

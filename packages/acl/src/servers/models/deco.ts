/**
 * 旧版装饰器
 * https://typescript.p6p.net/typescript-tutorial/decorator-legacy.html
 *
 * tsconfig 开启 "experimentalDecorators": true 后可在前端使用
 */

function foo(target) {
  return class extends target {
    name = 'Jony'
    sayHello() {
      console.log(`Hello ${this.name}`)
    }
  }
}

@foo
class P {
  constructor() {
  }
}

export const p = new P()
// @ts-ignore
// p.sayHello() // 会输出Hello Jony

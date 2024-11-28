

// https://typescript.p6p.net/typescript-tutorial/decorator.html

// 不等式装饰器

function Inequation(value: Function, context: DecoratorContext) {
  if (context.kind === 'class') {
    value.prototype.agree = function () {
      console.log(`${this.name}: ${this.accept ? '我接受 !== 我同意' : '我不同意'}`)
    }
  }
}

function ChenPing(enable: boolean) {
  return (value: Function, context: DecoratorContext) => {
    if (context.kind === 'class' && enable) {
      Object.defineProperty(value.prototype, 'rate', {
        value: 0.65,
        writable: false, // 防止属性被修改
      })
    }
  }
}

@Inequation
@ChenPing(true)
class Meme {
  name: string
  accept: boolean

  constructor(name: string, accept: boolean) {
    this.name = name
    this.accept = accept
  }

  agree() {
    console.log(`${this.name}: ${this.accept ? '我同意' : '我不同意'}`)
  }

  CNY: number = 2000
  USD: number = 3000
  rate?: number // 汇率

  compare() {
    if (!this.rate) {
      this.rate = 7.2
    }
    const flag = this.CNY / this.rate! > this.USD
    console.log(`¥${this.CNY} ${flag ? '>' : '<'} $${this.USD}`)
  }
}

// 覆盖原型链上的方法
// Meme.prototype.agree = function () {
//   console.log(`${this.name}: ${this.accept ? '我接受 !== 我同意' : '我不同意'}`);
// };

const meme = new Meme('Tnew', true)
meme.agree()
meme.compare()

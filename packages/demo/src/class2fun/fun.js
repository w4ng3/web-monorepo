'use strick'
function Example(name) {
  // 验证this指向
  if (!(this instanceof Example)) {
    throw new TypeError(
      `Class constructor Example cannot be invoked without 'new'`,
    )
  }
  this.name = name
}

Object.defineProperty(Example.prototype, 'func', {
  value() {
    // 不可通过new调用
    if (!(this instanceof Example)) {
      throw new TypeError(
        `Class constructor Example cannot be invoked without 'new'`,
      )
    }
    console.log(' name= ', this.name)
  },
  enumerator: false,
})

/**
 * 1. es6使用类语法，整个代码执行在严格模式下，故需要添加 'use strick'
 * 2. class 里的非静态属性和方法被调用前必须是要new一个实例
 * 3. class 里的方法是不可被枚举的，故不可用 Example.prototype.func 直接赋值，改为 Object.defineProperties
 * 4. 函数都可以使用new 来调用，但class里的方法不行
 */
const e = new Example('王东')

e.func()

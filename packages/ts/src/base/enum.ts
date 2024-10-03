enum MyEnum {
  One = 'One',
  Two = 'Two',
}

const s = MyEnum.One

console.log('s :>> ', s) // s :>>  One

// 搭配 keyof 运算符
// "One" | "Two"
type Foo = keyof typeof MyEnum

/* eslint-disable ts/no-explicit-any */
// // 使用泛型标注的加法函数，这里的 Type 就是一个类型变量
function add<Type extends number | string>(a: Type, b: Type): Type {
  // a as any 和 b as any：这是为了绕过 TypeScript 对 + 运算符的类型检查，因为 + 运算符在 TypeScript 中不适用于自定义类型，但可以用于 any 类型。
  return (a as any) + b
}

add(1, 2) // 返回值类型可被推断为 number
add('a', 'b') // 返回值类型可被推断为 string

// add(1, 'b') // 形参类型不匹配，报错

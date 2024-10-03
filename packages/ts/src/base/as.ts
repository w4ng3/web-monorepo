// 断言

interface Mouse {
  head: string
}

interface Mickey extends Mouse {
  name: string
}

const mouses: Mouse[] = []

// let mouse1 = mouses[1].name;  // 类型“Mouse”上不存在属性“avatar”
const mouse2 = mouses[1] as Mickey
// mouse2.name


interface Duck {
  neck: boolean
}

// let food = mouses[1] as Duck; // Error
// any 相当于直接暴力通过类型检查，打这张牌要警惕。
const food = mouses[1] as any as Duck // 这就是鸭脖

// unknown 是所有类型的父类型，想强行 as 的时候更建议打这张牌
const meat = mouses[1] as unknown as Duck // 这就是鸭脖


// 2000 >= 3000
interface Happy {
  salary: 3000
}

const mySalary: Happy = {
  // 能通过编译，某不等式成立了
  salary: 2000 as 3000,
}

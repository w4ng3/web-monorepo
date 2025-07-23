// 工厂模式，我们可以使用工厂函数来创建新对象。当函数返回一个新对象而不使用 new 关键字时，它就是一个工厂函数！
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
})

const user1 = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
})

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
})

console.log(user1)
console.log(user2)

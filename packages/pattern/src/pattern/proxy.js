// 代理模式
// 使用 Proxy 对象，我们可以更好地控制与某些对象的交互。代理对象可以在我们与对象交互时确定行为，例如，当我们获取值或设置值时
// https://arc.net/l/quote/iovnskga


const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
}

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`Hmm.. this property doesn't seem to exist`)
    }
    else {
      console.log(`The value of ${prop} is ${obj[prop]}`)
    }
    return obj[prop]
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Sorry, you can only pass numeric values for age.`)
    }
    else if (prop === 'name' && value.length < 2) {
      console.log(`You need to provide a valid name.`)
    }
    else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
      obj[prop] = value
    }
    return true
  },
})


console.log(personProxy.name)
personProxy.age = 44
console.log(personProxy.age)


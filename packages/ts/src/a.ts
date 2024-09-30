type Zhu = 'god' | 'Trisolaran' | 'God'

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }

  say = (who: Zhu) => {
    // God：上帝 / god：神
    const firstChar = who.charAt(0).toLocaleUpperCase()
    console.log(`${firstChar}${who.slice(1)} bless you`)
  }
}

const DPZ = new Person('DPZ')

// let 主 = 6; // 6 | 'god' | 'Trisolaran'

DPZ.say('God')

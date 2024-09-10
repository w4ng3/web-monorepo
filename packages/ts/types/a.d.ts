type Zhu = 'god' | 'Trisolaran' | 'God'
declare class Person {
  name: string
  constructor(name: string)
  say: (who: Zhu) => void
}
declare let DPZ: Person

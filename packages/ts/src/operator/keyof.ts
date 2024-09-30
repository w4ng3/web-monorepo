const obj = {
  name: 'zhan ying',
  age: 3,
}

type A = keyof typeof obj // 'name'|'age'

const a: A = 'name'


// --------

interface T {
  0: boolean
  a: string
  b: () => void
}

type KeyT = keyof T // 0 | 'a' | 'b'

const k: KeyT = 'a'

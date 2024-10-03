import { add } from '@/add'
import { sum } from '@/sum'
import { describe, expect, test } from '@jest/globals'

describe('测试sum函数', () => {
  test('add(1,2) === 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('add(1,1) === 2', () => {
    // expect(sum(1, 1)).toBe(2)
    expect(add(1, 1)).toBe(2)
  })
})

import { describe, expect, test } from '@jest/globals'
import { add } from '../add'

describe('测试add函数', () => {
  test('add(1,2) === 3', () => {
    expect(add(1, 2)).toBe(3)
  })
  test('add(1,1) === 2', () => {
    expect(add(1, 1)).toBe(2)
  })
})

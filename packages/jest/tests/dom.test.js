const { generateDiv } = require('../dom')
require('../jsdom-config')

describe('dom测试', () => {
  test('测试dom操作', () => {
    generateDiv()
    expect(document.getElementsByClassName('c1').length).toBe(1)
  })
})

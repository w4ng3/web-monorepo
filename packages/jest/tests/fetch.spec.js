const axios = require('axios')
const { getData } = require('../fetch')

jest.mock('axios')
test('fetch', async () => {
  // 模拟第一次接收到的数据
  axios.get.mockResolvedValueOnce('123')
  // 模拟每二次接收到的数据
  axios.get.mockResolvedValue('456')
  const data1 = await getData()
  const data2 = await getData()
  expect(data1).toBe('123')
  expect(data2).toBe('456')
})

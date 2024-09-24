import Mock, { Random } from 'mockjs'

export const useMock = () => {
  function getSongs() {
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|5-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'songName': `I got ${Random.word(5)}`,
          'singer': function () {
            return `珍珠·${Random.cname()}`
          },
          'date': '@date("yyyy-MM-dd")',
          'img': Random.image('200x100', '#50B347', '#FFF', 'YYDZ'),
        },
      ],
    })
    return data.list
  }
  return {
    getSongs,
  }
}

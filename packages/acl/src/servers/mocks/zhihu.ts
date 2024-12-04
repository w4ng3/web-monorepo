import type { ZhihuHot } from '../index'
import Mock, { Random } from 'mockjs'

export const mockZhihuHot = (): ZhihuHot[] => {
  return Mock.mock({
    'list|5-10': [{
      'id|+1': 1,
      'title': Random.ctitle(5, 20), // 使用中文标题更真实
      'url': Random.url(),
      'excerpt': Random.cparagraph(1),
      'cover': Random.image('200x100', '#50B347', '#FFF', 'Mock'),
    }],
  }).list
}

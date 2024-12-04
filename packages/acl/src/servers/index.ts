import { mockZhihuHot } from './mocks/zhihu'

export interface ZhihuHot {
  /** 唯一标识 */
  id: number
  /** 标题 */
  title: string
  /** 链接 */
  url: string
  /** 描述 */
  excerpt: string
  /** 封面 */
  cover: string
}

export const getZhihuHot = async (): Promise<ZhihuHot[]> => {
  try {
    const url = '/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true'
    const response = await fetch(url, { mode: 'no-cors' })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const res = await response.json()

    if (!res?.data?.length) {
      return []
    }

    const transformToZhihuHot = (item: any): ZhihuHot => {
      const target = item?.target || {}
      const children = item?.children || []
      const firstChild = children[0] || {}
      return {
        id: item?.id || 0,
        title: target?.title || '',
        url: target?.id ? `https://www.zhihu.com/question/${target.id}` : '',
        excerpt: target?.excerpt || '',
        cover: firstChild?.thumbnail || '',
      }
    }

    return res.data.map(transformToZhihuHot)
  }
  catch (error) {
    if (error instanceof TypeError) {
      console.error('网络请求失败:', error)
    }
    else {
      console.error('数据解析失败:', error)
    }
    return mockZhihuHot()
  }
}

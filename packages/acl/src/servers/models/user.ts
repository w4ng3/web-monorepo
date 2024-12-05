import Mock from 'mockjs'

function MockProperty(mockTemplate: any, count?: number) {
  return function (_target: any, _context: ClassFieldDecoratorContext) {
    return function (initialValue: any) {
      if (count !== undefined) {
        if (typeof mockTemplate === 'object') {
          return Mock.mock({
            [`array|${count}`]: [mockTemplate],
          }).array
        }
        return initialValue.concat(Mock.mock({
          [`array|${count}`]: [mockTemplate],
        }).array)
      }
      return initialValue + Mock.mock(mockTemplate)
    }
  }
}

export class User {
  @MockProperty('@cname')
  name: string = '员工-'

  @MockProperty('@integer(18, 60)')
  age: number = 0

  @MockProperty('@city(true)')
  city: string = ''

  /** 邮箱 */
  @MockProperty('@email')
  email: string = ''

  /** 爱好列表 */
  @MockProperty('@cword(2, 5)', 3)
  hobbies: string[] = []

  /** 历史居住城市 */
  @MockProperty('@city', 2)
  historyCities: string[] = []

  /** 工作经历 */
  @MockProperty({
    'company': '@cword(4,10)公司',
    'position': '@cword(2,4)',
    'year|1-10': 1,
  }, 2)
  workExperience: Array<{
    company: string
    position: string
    year: number
  }> = []

  /** 教育经历 */
  @MockProperty({
    'school': '@cword(4,8)大学',
    'major': '@cword(3,6)',
    'degree|1': ['本科', '硕士', '博士'],
  }, 1)
  education: Array<{
    school: string
    major: string
    degree: string
  }> = []
}

const user = new User()
console.log('user :>> ', user)

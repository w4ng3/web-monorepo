import { mount } from '@vue/test-utils'

import { describe, expect } from 'vitest'
import HelloWorld from '../HelloWorld.vue'

describe('helloWorld', () => {
  test('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

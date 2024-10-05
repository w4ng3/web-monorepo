import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TheCounter from '../TheCounter.vue'

describe('component TheCounter.vue', () => {
  test('should render', () => {
    const wrapper = mount(TheCounter, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    // 期望：快照 https://vitest.vuejs.ac.cn/api/expect#tomatchsnapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should be interactive', async () => {
    const wrapper = mount(TheCounter, { props: { initial: 0 } })
    expect(wrapper.text()).toContain('0')

    // 存在具有特定css类的元素
    expect(wrapper.find('.inc').exists()).toBe(true)
    expect(wrapper.find('.dec').exists()).toBe(true)

    await wrapper.get('.inc').trigger('click')

    expect(wrapper.text()).toContain('1')

    await wrapper.get('.dec').trigger('click')

    expect(wrapper.text()).toContain('0')
  })
})

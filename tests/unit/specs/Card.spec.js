import { shallowMount, mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Footer', () => {
  it('renders with props', () => {
    const propsObj = {cardTitle: 'Lorem', cardText: 'Ipsum dolor sit.'}
    const wrapper = mount(
      Card,
      {
        propsData: propsObj
      }
    )
    expect(wrapper.props('cardTitle')).toBe(propsObj.cardTitle)
    expect(wrapper.props('cardText')).toBe(propsObj.cardText)
  })
})

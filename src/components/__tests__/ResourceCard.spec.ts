import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ResourceCard from '@/components/ResourceCard.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('ResourceCard.vue', () => {
  it('renders the title', () => {
    const wrapper = mount(ResourceCard, {
      props: {
        title: 'Barbarian',
        route: '/classes/barbarian',
      },
    })

    expect(wrapper.text()).toContain('Barbarian')
  })

  it('shows the "Explore" button when wip is false', () => {
    const wrapper = mount(ResourceCard, {
      props: {
        title: 'Barbarian',
        route: '/classes/barbarian',
        wip: false,
      },
    })

    expect(wrapper.find('a').text()).toContain('Explore')
  })

  it('does not show "Explore" when wip is true', () => {
    const wrapper = mount(ResourceCard, {
      props: {
        title: 'Barbarian',
        route: '/classes/barbarian',
        wip: true,
      },
    })
    expect(wrapper.text()).toContain('{W.I.P}')
  })

  it('should prop "wip" be false by default', () => {
    const wrapper = mount(ResourceCard, {
      props: {
        title: 'Barbarian',
        route: '/classes/barbarian',
      },
    })
    expect(wrapper.props('wip')).toBe(false)
  })

  it('passes correct route to RouterLink', () => {
    const wrapper = mount(ResourceCard, {
      props: {
        title: 'Barbarian',
        route: '/classes/barbarian',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    const routerLink = wrapper.findComponent(RouterLinkStub)
    expect(routerLink.props('to')).toBe('/classes/barbarian')
  })
})

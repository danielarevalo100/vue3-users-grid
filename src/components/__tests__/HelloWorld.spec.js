import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MenuItem from '../MenuItem.vue'

describe('Menu item', () => {
  it('renders properly', () => {
    const title = 'Title test';
    const wrapper = mount(MenuItem, { props: { title: 'Title test', icon: 'icon.svg', active: true, collapsed: true } })
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(title);
  })
})

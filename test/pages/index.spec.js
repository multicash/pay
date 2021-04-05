import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index'

describe('Index page shows pay link details', () => {
  test('All data is valid', () => {
    const wrapper = shallowMount(Index, {
      stubs: ['Container'],
      mocks: {
        $route: {
          query: {
            id: 'd2641f65-9079-4101-93a3-ce45f438afb4',
            address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
            amount: '123',
            tag: '@myTag',
            label: 'hello world',
          },
          meta: {},
        },
      },
    })

    expect(wrapper.text()).toContain('MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz')
    expect(wrapper.text()).toContain('@myTag')
    expect(wrapper.text()).toContain('hello world')
    expect(wrapper.text()).toContain(
      new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'MCX',
      })
        .format(123)
        .replace('MCX', '')
    )
  })
})

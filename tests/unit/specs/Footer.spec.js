import { shallowMount, mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  it('has an email error with bad email', () => {
    const email = 'notvalidemail';
    //const wrapper = shallowMount(Footer);
    //wrapper.setData({form: { country: null, email: email }});
    //expect(wrapper.vm).toBeTruthy();
  })
})

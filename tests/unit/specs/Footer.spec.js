import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import NewsletterSubscribe from "@/components/Subscribe.vue"
import Footer from '@/components/Footer.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuelidate);

describe('Footer', () => {
  const wrapper = mount(Footer, {localVue})

  it('renders NewsletterSubscribe', () => {
    expect(wrapper.contains(NewsletterSubscribe)).toBe(true)
  })
  
})

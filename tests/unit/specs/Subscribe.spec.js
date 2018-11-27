import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import CountrySelect from "@/components/CountrySelect.vue"
import NewsletterSubscribe from '@/components/Subscribe.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuelidate);

describe('NewsletterSubscribe', () => {
  const wrapper = mount(
    NewsletterSubscribe, {localVue}
  )

  it('has validation error on invalid email', () => {
    const email = 'notvalidemail';

    expect(wrapper.isVueInstance()).toBeTruthy();
    wrapper.find('input').setValue(email);
    wrapper.find("form").trigger("submit.prevent")
    expect(wrapper.vm.$v.form.email.$error).toBeTruthy();
  })

  it('has no validation errors with valid email', () => {
    const email = 'valid@email.com';
    expect(wrapper.isVueInstance()).toBeTruthy();
    wrapper.find('input').setValue(email);
    wrapper.find("form").trigger("submit.prevent")
    expect(wrapper.vm.$v.form.email.$error).toBeFalsy();
  })

  it('has validation error no email supplied', () => {
    const email = null;
    expect(wrapper.isVueInstance()).toBeTruthy();
    wrapper.find('input').setValue(email);
    wrapper.find("form").trigger("submit.prevent")
    expect(wrapper.vm.$v.form.email.$error).toBeTruthy();
  })

  it('has validation error no country supplied', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    // null option
    wrapper.findAll('option').at(0).setSelected();
    wrapper.find("form").trigger("submit.prevent")
    expect(wrapper.vm.$v.form.country.$error).toBeTruthy();
  })

  it('has no error when country is supplied', () => {
    const country = 'US';
    expect(wrapper.isVueInstance()).toBeTruthy();
    // set the child components selection to our country 'US'
    wrapper.find(CountrySelect).setData({selected: country});
    wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.vm.$v.form.country.$error).toBeFalsy();
  })

})

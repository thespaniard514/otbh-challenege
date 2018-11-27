import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import moxios from 'moxios'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import CountrySelect from "@/components/CountrySelect.vue"

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuelidate);

describe('Footer', () => {
  beforeEach(function(){
    moxios.install()
  })

  afterEach(function(){
    moxios.uninstall()
  })


  it('loads countries into options', (done) => {
    const wrapper = mount(CountrySelect, {localVue})
    const sampleResponse = [
      {alpha2Code: 'US', name: 'United States of America'},
      {alpha2Code: 'MX', name: 'Mexico'}
    ]
    
    moxios.stubRequest("https://restcountries.eu/rest/v2/all", {
      status: 200,
      response: sampleResponse
    })

    moxios.wait(() => {
      wrapper.findAll('option').at(1).setSelected()
      expect(wrapper.vm.$data.selected).toBe(sampleResponse[0].alpha2Code);
      done()
    })

  })

})

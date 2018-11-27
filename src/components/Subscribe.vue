<template>
  <b-form inline class="justify-content-center" @submit.prevent="submit">
    <b-form-group :class="{ 'has-error': $v.form.country.$error }">
      <CountrySelect class="col-md-10" v-model="form.country" />
    </b-form-group>
    <b-form-group :class="{ 'has-error': $v.form.email.$error }">
      <b-input-group>
        <b-form-input type="text"
                      placeholder="Your email address"
                      v-model="form.email"
                      ></b-form-input>
        <b-input-group-append>
            <b-btn type="submit" class="btn-sub">Subscribe</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-form>
</template>

<script>
  import CountrySelect from "@/components/CountrySelect.vue"
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'NewsletterSubscribe',
    components: {
      CountrySelect
    },
    data() {
      return {
        form: {
          email: null,
          country: null,
        }
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        country: {
          required
        }
      }
    },
    methods: {
      submit() {
        this.$v.form.$touch();
        if(this.$v.form.$error){
          return
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-sub {
    background-color: #57ac4a;
  }

  .has-error input, .has-error select {
    border-color: red;
  }
</style>

<template>
  <div id="footer">
    <div class="container">
      <p class="small">Sign up for our newsletter to recieve latest news about our company.</p>
      <b-form inline class="justify-content-center" @submit.prevent="submit">
        <b-form-group :class="{ 'has-error': $v.form.country.$error }">
          <CountrySelect class="col-md-9" v-model="form.country" />
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
    </div>
  </div>
</template>

<script>
  import CountrySelect from "@/components/CountrySelect.vue"
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'Footer',
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
#footer {
  padding-top: 50px;
  padding-bottom: 40px;
  text-align: center;
  background-image: url('../assets/footer_bg.png');
}

#footer p {
  color: #fff;
}

.btn-sub {
  background-color: #57ac4a;
}

.has-error input, .has-error select {
  border-color: red;
}
</style>

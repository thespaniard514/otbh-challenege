<template>
  <b-form-select v-model="selected" :options="selectOptions" class="country-select">
    <template slot="first">
      <option :value="null" disabled>Select Your Country</option>
    </template>
  </b-form-select>
</template>

<script>
  import axios from "axios";
  import SelectElem from "@/components/Select.vue";

  export default {
    name: 'CountrySelect',
    components: {
      SelectElem
    },
    props: ['value'],
    data() {
      return {
        selected: this.value,
        selectOptions: []
      }
    },
    watch: {
      selected(val) {
        this.$emit('input', val);
      }
    },
    mounted() {
      axios({ method: "GET", "url": "https://restcountries.eu/rest/v2/all" })
        .then(result => {
          this.selectOptions = result.data.map(m => {
            return {value: m.alpha2Code, text: m.name};
          });
        }, error => {
          console.error(error);
        });
    }
  }
</script>

<style lang="scss" scoped>
  .country-select {
    color: #57ac4a;
  }
</style>

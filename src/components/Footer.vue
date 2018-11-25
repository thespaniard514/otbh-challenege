<template>
  <div id="footer">
    <p>Sign up for our newsletter to recieve latest news about our company.</p>
    <b-form inline>
      <CountrySelect class="mr-3"/>
      <b-form-input />
      <input type="submit" value="Subscribe" class="btn btn-sub"/>
    </b-form>
  </div>
</template>

<script>
  import CountrySelect from "@/components/CountrySelect.vue"
  export default {
    name: 'Footer',
    components: {
      CountrySelect
    }
  }
</script>

<style lang="scss" scoped>
#footer {
  padding-top: 50px;
  padding-bottom: 40px;
  color: #fff;
  text-align: center;
  background-image: url('../assets/footer_bg.png');
}

.btn-sub {

}
</style>

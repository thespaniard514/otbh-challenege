<template>
  <div id="app">
      <Header />
      <!-- Would throw router view here if bigger app -->
      <Section1 />
      <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Section1 from './components/Section1.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Section1
  }
}
</script>

<style lang="scss">
#app {
  /* Using Montserrat - closest free font to ProximaNova */
  font-family: 'Montserrat', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

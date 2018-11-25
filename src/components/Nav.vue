<template>
  <b-navbar class="container navbar-default" toggleable="md" variant="faded" fixed="top" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#"><img src="../assets/logo-header.png" /></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Disabled</b-nav-item>
      </b-navbar-nav>
    </b-navbar-nav>

  </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Nav',
    props: {
    }
  }
</script>

<style lang="scss" scoped>
@media(min-width:768px) {
  .navbar-default {
    background-color: transparent;
    padding: 50px 0;
    border: none;
  }
  .nav-link {
    color: #fff !important;
  }

  .nav-link:hover{
    text-decoration: underline !important;
  }
}
</style>

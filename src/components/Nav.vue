<template>
  <b-navbar class="container navbar-default" toggleable="md" variant="faded" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#"><img src="../assets/logo-header.png" /></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Section1</b-nav-item>
        <b-nav-item href="#">Section2</b-nav-item>
      </b-navbar-nav>
    </b-navbar-nav>

  </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style lang="scss">
  .navbar-default {
    background-color: transparent;
    padding: 50px 0;
    border: none;
  }
  .nav-item {
    padding: 0 20px !important;
  }

  .nav-item a {
    text-transform: uppercase;
    font-weight: 700 !important;
    color: #fff !important;
  }

  .nav-item a:hover{
    border-bottom: 2px solid #70df88 !important;
    padding-bottom: 3px;
  }

</style>

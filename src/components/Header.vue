<template>
  <header>
    <Nav />
    <div class="container header-text">
      <div class="lead-in">Lorem ipsum dolor sit amet</div>
      <div class="large-text">Lorem ipsum dolor sit amet.</div>
      <b-btn class="read-more">Read More</b-btn>
    </div>
  </header>
</template>

<script>
  import Nav from '@/components/Nav.vue'

  export default {
    name: 'Header',
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
header {
  background-image: url('../assets/header_bg.png');
	background-repeat: none;
	background-attachment: scroll;
	background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  text-align: center;
	color: white;
  display: block;
}
.header-text {
  padding-top: 300px;
  padding-bottom: 250px;
}

@media(max-width: 768px){
  .header-text {
    padding-top: 20px;
    padding-bottom: 50px;
  }
}

.header-text .lead-in {
  font-weight: 700;
  font-size: 35px;
  line-height: 35px;
  margin-bottom: 5px;
}
.header-text .large-text {
  font-weight: 700;
  font-size: 75px;
  line-height: 75px;
  margin-bottom: 50px;
}
.header-text .read-more {
  background-color: #f6fef6;
  color: #57ab4a;
}
</style>

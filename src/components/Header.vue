<template>
  <header>
    <div class="container header-text">
      <div class="lead-in">Lorem ipsum dolor sit amet</div>
      <div class="large-text">Lorem ipsum dolor sit amet.</div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
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
  padding-bottom: 200px;
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
</style>

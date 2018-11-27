<template>
  <div id="footer">
    <div class="container">
      <p class="small">Sign up for our newsletter to recieve latest news about our company.</p>
      <NewsletterSubscribe />
    </div>
  </div>
</template>

<script>
  import NewsletterSubscribe from "@/components/Subscribe.vue"
  export default {
    name: 'Footer',
    components: {
      NewsletterSubscribe
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
</style>

<template>
  <div class="card">
    <slot name="cardImage"></slot>
    <h2 class="card-title">{{cardTitle}}</h2>
    <p class="card-text">{{cardText}}</p>
    <slot name="button"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    components: {
    },
    props: {
      cardTitle: String,
      cardText: String
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    border: none;
    text-align: center;
    padding: 20px;
    h2 {
      padding-top: 30px;
    }
    img {
      width: 90%;
      position: relative;
      align-self: center;
    }
    button {
      align-self: center;
      width: 150px;
      background-color: #fff;
      border-color: #57ab4a;
      color: #57ab4a;
    }
    button:hover {
      background-color: #57ab4a;
      opacity: .4;
      color: #fff;
    }
  }
</style>

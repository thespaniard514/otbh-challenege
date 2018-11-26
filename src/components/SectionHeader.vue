<template>
  <div class="heading-text text-center">
    <div class="section-name">{{ sectionName }}</div>
    <p class="section-subtext">{{ sectionSubtext }}</p>
  </div>
</template>

<script>
  export default {
    name: 'SectionHeader',
    props: {
      sectionName: String,
      sectionSubtext: String
    }
  }
</script>

<style lang="scss">
  .heading-text .section-name {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 5px;
  }

  .section-subtext {
    color: #afafaf;
  }
</style>

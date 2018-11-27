<template>
  <div class="container">
    <SectionHeader class="section-header" sectionName="Section 1" sectionSubtext="Lorem ipsum dorot sit amet didi dada." />
    <div class="cards">
      <Card cardTitle="Lorem"
            cardText="Lorem ipsum dorot sit amet didi dada dudu doo. Aliquam at portt titor donec. Plaaecer nisl das. Lorem ipsum dorot sit amet didi dada dudu doo lorem ipsum das."
            class="card"
      >
        <img src="@/assets/stock1.png" alt="Stock Photo" slot="cardImage"/>
        <b-btn class="read-more" slot="button">Read More</b-btn>
      </Card>
      <Card cardTitle="Ipsum"
            cardText="Lorem ipsum dorot sit amet didi dada dudu doo. Aliquam at portt titor donec. Plaaecer nisl das. Lorem ipsum dorot sit amet didi dada dudu doo lorem ipsum das."
      >
        <img src="@/assets/stock2.png" alt="Stock Photo" slot="cardImage"/>
        <b-btn class="read-more" slot="button">Read More</b-btn>
      </Card>
      <Card cardTitle="Dorlo Sit"
            cardText="Lorem ipsum dorot sit amet didi dada dudu doo. Aliquam at portt titor donec. Plaaecer nisl das. Lorem ipsum dorot sit amet didi dada dudu doo lorem ipsum das."
      >
        <img src="@/assets/stock3.png" alt="Stock Photo" slot="cardImage"/>
        <b-btn class="read-more" slot="button">Read More</b-btn>
      </Card>
    </div>
  </div>
</template>

<script>
  import SectionHeader from '@/components/SectionHeader.vue';
  import Card from '@/components/Card.vue';

  export default {
    name: 'Section1',
    components: {
      SectionHeader,
      Card
    }
  }
</script>

<style lang="scss" scoped>
.section {
  color: #4b4845;
}
.section-header {
  padding-top: 100px;
  padding-bottom: 50px;
}

@media(min-width: 768px){
  .cards {
    display: flex;
  }
}

.cards {
  justify-content: center;
  padding-bottom: 100px;
}
.card {
  padding: 20px 10px;
}

.border-variant-none {
  border: none;
}
</style>

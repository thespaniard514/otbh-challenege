<template>
  <div class="container">
    <SectionHeader class="section-header" sectionName="Section 1" sectionSubtext="Lorem ipsum dorot sit amet didi dada." />
    <div class="cards">
      <b-card-group deck>
        <b-card title="Lorem"
                img-src="@/assets/stock1.png"
                img-alt="Stock Image"
                img-top
                align="center"
                border-variant="variant-none">
                <p class="card-text">Lorem ipsum dorot sit amet didi dada dudu doo. Aliquam at portt titor donec. Plaaecer nisl das. Lorem ipsum dorot sit amet didi dada dudu doo lorem ipsum das.</p>
                <b-btn class="read-more">Read More</b-btn>
        </b-card>
        <b-card title="Ipsum"
                img-src="@/assets/stock2.png"
                img-alt="Stock Image"
                img-top
                align="center"
                border-variant="variant-none">
                <p class="card-text">Lorem ipsum dorot sit amet didi dada dudu doo. Aliquam at portt titor donec. Plaaecer nisl das. Lorem ipsum dorot sit amet didi dada dudu doo lorem ipsum das.</p>
                <b-btn class="read-more">Read More</b-btn>
        </b-card>
        <b-card title="Dolor Sit"
                img-src="@/assets/stock3.png"
                img-alt="Stock Image"
                img-top
                align="center"
                border-variant="variant-none">
                <p class="card-text">Lorem ipsum dorot sit amet didi dada dudu doo. Aliquam at portt titor donec. Plaaecer nisl das. Lorem ipsum dorot sit amet didi dada dudu doo lorem ipsum das.</p>
                <b-btn class="read-more">Read More</b-btn>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  import SectionHeader from '@/components/SectionHeader.vue';

  export default {
    name: 'Section1',
    components: {
      SectionHeader
    }
  }
</script>

<style lang="scss">
.section {
  color: #4b4845;
}
.section-header {
  padding-top: 100px;
  padding-bottom: 100px;
}

.cards {
  padding-bottom: 100px;
}

/* .heading-text .section-name {
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 5px;
}

.section-subtext {
  color: #afafaf;
} */

.tile {
}

.read-more {
  background-color: #fff;
  border-color: #57ab4a;
  color: #57ab4a;
}

.read-more:hover {
  background-color: #57ab4a;
  opacity: .4;
}

.border-variant-none {
  border: none;
}
</style>

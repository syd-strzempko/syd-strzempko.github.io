<template>
  <div class="content">
    <Header :title="data.title" :subtitle="data.byline" />
    <img :src="data.photo" id="headshot" alt="headshot" />
    <span class="bookend">↭</span>
    <div class="p-wrapper">
      <p v-for="(detail, index) in data.details" :key="index"><span class="bullet">⊱</span> {{detail}}</p>
    </div>
    <ResumeDL class="viewDesktop" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ResumeDL from '@/components/ResumeDL.vue'

export default {
  props: {
    data: Object 
  },
  name: 'Home',
  components: {
    Header,
    ResumeDL
  }
}
</script>

<style scoped>
#headshot {
  border: .25rem solid var(--gold);
  border-radius: 5px;
  margin-top: .25rem;
  max-height: 10rem;
}
p {
  margin: .25rem 0;
  text-align: justify;
}
.bullet {
  font-weight: bold;
}
.bookend {
  display: block;
}
</style>
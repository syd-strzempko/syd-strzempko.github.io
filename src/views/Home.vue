<template>
  <div class="content">
    <Header :title="data.title" :subtitle="data.byline" />
    <div id="img-wrapper">
      <span class="bookend" v-html="'>>'"></span>
      <img :src="data.photo" id="headshot" alt="headshot" />
      <span class="bookend" v-html="'<<'"></span>
    </div>
    <div class="p-wrapper">
      <div v-for="(detail, index) in data.details" :key="index" class="p-each">
        <span class="bullet" v-html="'>'"></span>
        <p>{{detail}}</p>
      </div>
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
#img-wrapper {
  display: flex;
  align-items: center;
  justify-content: stretch;
}
#headshot {
  border-radius: 5px;
  margin-top: .25rem;
  max-height: 10rem;
  flex: 0 0 auto;
}
.bookend {
  flex: 1;
  display: block;
}
.p-each {
  margin: .25rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
}
.p-each p {
  margin: 0 1.5rem 0;
  text-align: justify;
}
.bullet {
  font-weight: bold;
  vertical-align: top;
}
</style>
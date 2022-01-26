<template>
  <div class="content">
    <Header title="Art"></Header>
    <div class="wrapper">
      <ArtTile v-for="art in data.slice().reverse()" v-bind:key="art.id" v-bind:art="art" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ArtTile from '@/components/ArtTile.vue'

export default {
  props: {
    data: Array
  },
  name: 'ArtList',
  components: {
    Header,
    ArtTile
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>

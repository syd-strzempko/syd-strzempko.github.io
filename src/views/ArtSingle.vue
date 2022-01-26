 <template>
  <div class="content">
    <router-link to="/art">Back to List</router-link>
    <div v-if="data" class="carousel">
      <router-link v-if="!isLast" :to="{ name: 'artsingle', params: { id: (data.art.id + 1) }}">
        <span class="iconlink">↩</span>
      </router-link>
      <span v-else class="iconlink empty">↩</span>
      <img :src="data.art.pathLong" />
      <router-link v-if="!isFirst" :to="{ name: 'artsingle', params: { id: (data.art.id - 1) }}">
        <span class="iconlink">↪</span>
      </router-link>
      <span v-else class="iconlink empty">↪</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtSingle',
  props: {
    data: Object
  },
  computed: {
    isFirst() {
      return this.data.art.id == 0;
    },
    isLast() {
      return this.data.art.id == (this.data.total - 1);
    }
  },
}
</script>
<style scoped>
.content {
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  padding: .25rem 0 .75rem;
}
.carousel {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
img {
  flex: 1;
  min-width: 0;
}
a {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.empty {
  pointer-events: none;
  visibility: hidden;
}
</style>

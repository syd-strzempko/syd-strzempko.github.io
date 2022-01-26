 <template>
  <router-link :to="{ name: 'artsingle', params: { id: art.id }}">
    <div class="tile progressive">
      <img class="preview"
        v-progressive="art.pathLong"
        :src="art.compressed.pathLong" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'WorkTile',
  props: {
    art: Object
  }
}
</script>

<style>
.tile.progressive {
  width: 150px;
  height: 150px;
  margin: .25rem;
}
.tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

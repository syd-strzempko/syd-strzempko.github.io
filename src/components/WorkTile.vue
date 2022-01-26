 <template>
  <div class="tile">
    <div class="timespan">{{job.span}}</div>
    <router-link :to="{ name: 'worksingle', params: { id: job.url }}">{{isjob ? job.org : job.project}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'WorkTile',
  props: {
    id: Number,
    job: Object,
    isjob: Boolean,
  }
}
</script>

<style scoped>
.tile {
  display: flex;
  flex-flow: row nowrap;
  padding: 0 0 .5rem;
}
.tile .timespan {
  font-family: "AlbertusMT";
  text-align: left;
  padding-top: 2px;
  flex: 1;
}
a {
  margin-left: 2rem;
  text-align: left;
}
@media only screen and (min-width: 600px) {
  .tile .timespan {
    flex: 3;
  }
  a {
    flex: 10;
  }
}
</style>

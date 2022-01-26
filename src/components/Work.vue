 <template>
  <div class="content">
    <router-link to="/work">Back</router-link>
    <h1>{{ job.org }} is my name</h1>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    job: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

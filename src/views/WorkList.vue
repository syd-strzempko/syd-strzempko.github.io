<template>
  <div class="content worklist">
    <Header title="Work History" subtitle="& Selected Projects" />
    <div class="wrapper">
      <WorkTile v-for="project in combinedWorkAndProjects" v-bind:key="project.work.id" v-bind:job="project.work" v-bind:isjob="project.isJob" />
    </div>
    <ResumeDL />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ResumeDL from '@/components/ResumeDL.vue'
import WorkTile from '@/components/WorkTile.vue'

export default {
  props: {
    data: Object 
  },
  name: 'WorkList',
  components: {
    Header,
    ResumeDL,
    WorkTile
  },
  computed: {
    combinedWorkAndProjects() {
      return this.data.jobs.map(function (x) { return {work: x, isJob: true} })
        .concat(this.data.projects.map(function (x) { return {work: x, isJob: false} }));
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column nowrap;
}
</style>

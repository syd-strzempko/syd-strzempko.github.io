<template>
  <router-view :data="getData(name)" />
</template>

<script>
export default {
  props: {
    name: String,
  },
  name: 'Route',
  methods: {
    getData: function(routeName) {
      let rootRef = this.$root.$data;
      let urlRef = this.$route.params.id;
      if (typeof urlRef !== "undefined") {
        let dataRef = routeName.slice(0, routeName.indexOf('single'));
        if (routeName == 'worksingle') {
          return rootRef[dataRef]['jobs'].find(obj => obj.url == urlRef) || rootRef[dataRef]['projects'].find(obj => obj.url == urlRef);
        } else {
          return { art: rootRef[dataRef].find(obj => obj.id == urlRef), total: rootRef[dataRef].length };
        }
      } else {
        return rootRef[routeName];
      }
    }
  }
}
</script>

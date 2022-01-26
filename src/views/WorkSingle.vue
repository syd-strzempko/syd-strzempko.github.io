 <template>
  <div class="content">
    <router-link to="/work">
      <span class="iconlink">↩</span>
    </router-link>
    <div v-if="data">
      <fragment v-if="data.title">
        <h1>{{ data.title }}</h1>
        <a v-if="data.link" :href="data.link">
          <h2>{{ data.org }}</h2>
        </a>
        <h1 v-else>{{ data.org }}</h1>
        <h2>{{ data.project }}</h2>
      </fragment>
      <fragment v-else>
        <a v-if="data.link" :href="data.link">
          <h1>{{ data.project }}</h1>
        </a>
        <h1 v-else>{{ data.project }}</h1>
        <h2>{{ data.org }}</h2>
      </fragment>
      <h2>{{ data.span }}</h2>
      <ul>
        <li
          v-for="(detail, index) in data.details" v-bind:key="index">
          {{detail}}
        </li>
      </ul>
    </div>
    <h1 v-else>no job here :(</h1>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'WorkSingle',
  props: {
    data: Object
  },
  components: {
    Fragment,
  }
}
</script>

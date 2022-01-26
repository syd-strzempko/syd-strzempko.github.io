 <template>
  <div class="title">
    <h1>{{ title }}</h1>
    <h2 v-if="subtitle">{{ subtitle }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    subtitle: String
  }
}
</script>
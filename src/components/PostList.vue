<template>
  <div>
    <post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from './Post'

export default {
  components: {
    'post': Post
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getComments')
  },
  computed: {
    posts() {
      return this.$store.state.posts.byId;
    }
  }
}
</script>


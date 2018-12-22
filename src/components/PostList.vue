<template>
  <v-flex>
    <post v-for="post in posts" :key="post.id" :post="post" />
  </v-flex>
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


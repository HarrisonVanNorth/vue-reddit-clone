<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img
          :src="post.img_url"
        ></v-img>
        <v-card-title>
          {{post.title}} |
          <v-icon @click="upvote" >arrow_upward</v-icon>
          {{post.votes}}
          <v-icon @click="downvote" v-if="post.votes > 0" >arrow_downward</v-icon>
        </v-card-title>
        <v-card-text>
          {{post.content}}
        </v-card-text>
        <hr />
        <comment-list :post="post" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CommentList from './CommentList'

export default {
  components: {
    'comment-list': CommentList
  },
  props: ['post'],
  methods: {
    upvote: function() {
      this.$store.dispatch('putVote', {
        post_id: this.post.id,
        direction: 'increase'
      })
    },
    downvote: function() {
      this.$store.dispatch('putVote', {
        post_id: this.post.id,
        direction: 'decrease'
      })
    }
  }
}
</script>
<template>
  <v-list>
    <!-- Comment Hi -->
    <span>{{ post.createdAt | moment("from", "now") }}</span> | <v-icon>comment</v-icon> {{ comments.length }} comments
    <!-- New Comment Form -->
    <v-form @submit.prevent="addComment">
      <v-text-field
        v-model="comment"
        label="Add Comment"
      ></v-text-field>
      <v-btn type="submit">Submit</v-btn>
    </v-form>
    <v-card v-for="comment in comments" :key="comment.id" >
      <v-flex>
        <v-card-text>
          {{ comment.content }}
        </v-card-text>
      </v-flex>
    </v-card>
  </v-list>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      comment: ''
    }
  },
  computed: {
    comments() {
      const { comments } = this.$store.state;
      let filtered = [];
      for (let key in comments.byId) {
        if (comments.byId[key].post_id === this.post.id) {
          filtered.push(comments.byId[key]);
        }
      }
      return filtered;
    }
  },
  methods: {
    addComment: function() {
      this.$store.dispatch('putComment', {
        'content': this.comment,
        'post_id': this.post.id
      })
    }
  }
}
</script>
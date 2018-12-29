<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img
          :src="post.img_url"
        ></v-img>
        <v-card-title>
          {{post.title}}
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
}
</script>
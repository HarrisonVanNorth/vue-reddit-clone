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
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    comments() {
      
    }
  }
}
</script>
<template>
  <v-card>
    <v-img
      :src="post.img_url"
    ></v-img>
    <v-card-title>
      {{post.title}}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['post']
}
</script>
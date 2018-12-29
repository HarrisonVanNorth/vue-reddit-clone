<template>
  <v-form v-on:submit.prevent="addPost" >
    <!-- Title -->
    <v-text-field
      v-model="title"
      label="Title"
    ></v-text-field>
    <!-- Body -->
    <v-text-field
      v-model="body"
      label="Body"
    ></v-text-field>
    <!-- Author -->
    <v-text-field
      v-model="author"
      label="Author"
    ></v-text-field>
    <!-- Image Url -->
    <v-text-field
      v-model="img_url"
      label="Image URL"
    ></v-text-field>
    <!-- Submit -->
    <v-btn type="submit">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      'title': '',
      'body': '',
      'author': '',
      'img_url': ''
    }
  },
  methods: {
    addPost: function() {
      this.$store.dispatch('putPost', {
        'title': this.title,
        'body': this.body,
        'author': this.author,
        'img_url': this.img_url
      })
    }
  }
}
</script>


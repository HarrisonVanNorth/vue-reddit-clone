<template>
  <v-form>
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
    <v-btn>Submit</v-btn>
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
  }
}
</script>


<template>
<!-- v-app is a standard wrapper in vuetify and MUST wrap all my vuetify components -->
  <v-app>
    <!-- v-toolbar acts as my header component -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">REDDIT CLONE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- my app components will all be wraped within the v-content component -->
    <v-content>
      <v-container grid-list-lg>
        <v-layout fill-height justify-center>
          <v-flex xs8>
            <v-layout>
              <v-flex xs6>
                <!-- Insert Filter Component -->
                <filter-posts />
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs1 justify-end>
                <v-btn outline fab color="error" @click="composing = !composing">
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
            <!-- Insert New Post Form -->
            <v-layout justify-center v-if="composing">
              <v-flex xs10>
                <add-post-form />
              </v-flex>
            </v-layout>
            <!-- PostList Component -->
            <v-layout justify-center>
              <!-- Insert PostListComponent -->
              <v-flex xs12>
                <post-list />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PostList from './components/PostList'
import FilterPosts from './components/FilterPosts'
import AddPostForm from './components/AddPostForm'

export default {
  name: 'App',
  components: {
    'post-list': PostList,
    'filter-posts': FilterPosts,
    'add-post-form': AddPostForm,
  },
  data() {
    return {
      composing: false
    }
  }
}
</script>

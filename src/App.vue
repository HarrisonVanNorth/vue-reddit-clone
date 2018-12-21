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
    <!-- my app components will all be wraped within the v-convent component -->
    <v-content>
      <v-container>
        <v-layout>
          <!-- Insert Filter Component -->
        </v-layout>
        <v-layout>
          <!-- Insert New Post Form -->
        </v-layout>
        <v-layout>
          <!-- Insert PostListComponent -->
          <post-list />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PostList from './components/PostList'

export default {
  name: 'App',
  components: {
    'post-list': PostList
  },
  data () {
    return {
      //
    }
  }
}
</script>

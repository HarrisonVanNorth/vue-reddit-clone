import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

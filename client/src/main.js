import Vue from 'vue'
import App from './App.vue'
import { router } from './vue-router.js'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)

export const eventBus = new Vue();

new Vue({
  Multiselect,
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import TopToast from './lib/index.js'
Vue.use(TopToast)
new Vue({
  el: '#app',
  render: h => h(App)
})
import Vue from 'vue'
import App from './App.vue'
import vueLeafletPlugin from 'VueLeafletPlugin'

Vue.use(vueLeafletPlugin);
new Vue({
  el: '#app',
  render: h => h(App)
})

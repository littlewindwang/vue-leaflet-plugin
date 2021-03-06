import Vue from 'vue'
import App from './App.vue'
// import vueLeafletPlugin from '../dist/vue-leaflet-plugin'
import vueLeafletPlugin from './lib/index.js'


Vue.use(vueLeafletPlugin);
new Vue({
  el: '#app',
  render: h => h(App)
})

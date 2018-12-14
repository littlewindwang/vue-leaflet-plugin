import vlp from './vue-leaflet-plugin.vue' // 导入
import Lmap from './map.vue'

const vueleafletplugin = {
  install (Vue, options) {
    // Vue.component(vlp.name, vlp);'


    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(vueleafletplugin);
    }



    Vue.component('Lmap', Lmap)
  }
}


export default vueleafletplugin// 导出

export {
  Lmap
}

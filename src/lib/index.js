import vlp from './vue-leaflet-plugin.vue' // 导入
import Lmap from './map.vue'
import Lmarker from './mapmarker'

import vue from 'vue'

const vueleafletplugin = {
  install (Vue, options) {
    // Vue.component(vlp.name, vlp);'
    Vue.prototype.$mapbus = new vue();

    Vue.component('Lmap', Lmap);
    Vue.component('Lmarker', Lmarker);

  }
}


export default vueleafletplugin// 导出

export {
  Lmap
}

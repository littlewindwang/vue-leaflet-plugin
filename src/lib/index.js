import vlp from './vue-leaflet-plugin.vue' // 导入
const vueleafletplugin = {
  install (Vue, options) {
    Vue.component(vlp.name, vlp)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueleafletplugin);
}

export default vueleafletplugin // 导出

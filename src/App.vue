<template>
  <div id="app">
    <!--<vue-leaflet-plugin></vue-leaflet-plugin>-->
    <!--<leafletmap id="myfirstmap"></leafletmap>-->
<div class="first-container">
    <Lmap id="myfirstmap"></Lmap>

</div>
    <br>

    <div class="second-container">
    <Lmap id="mysecondmap"></Lmap>
    </div>
  </div>
</template>

<script>
  import leafletmap from './lib/map.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    leafletmap
  }
}
</script>

<style lang="scss">
  .first-container{//map container is necessary deafult map will width:100% height:100%
  /*margin:0 auto;*/
  width:500px;
  height: 500px;
}
  .second-container{
    width:300px;
    height: 300px;
  }
</style>

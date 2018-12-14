<template>
  <div id="app">
    <!--<vue-leaflet-plugin></vue-leaflet-plugin>-->
    <!--<leafletmap id="myfirstmap"></leafletmap>-->
    <div class="first-container">
      <Lmap id="myfirstmap"></Lmap>

    </div>
    <br>
    <button @click="handleClick()">show/hide map</button>


    <div v-show='showMap' class="second-container">
      <Lmap id="mysecondmap" ref="secondMap"></Lmap>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showMap: false,
      }
    },
    components: {},
    methods: {
      handleClick() {
        this.showMap = !this.showMap;
        this.$refs.secondMap.initResize();
      }
    }
  }
</script>

<style lang="scss">
  .first-container { //map container is necessary deafult map will width:100% height:100%
    /*margin:0 auto;*/
    width: 200px;
    height: 200px;
  }

  .second-container {
    width: 200px;
    height: 200px;
  }
</style>

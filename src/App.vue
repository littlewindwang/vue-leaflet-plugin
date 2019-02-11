<template>
  <div id="app">
    <!--<vue-leaflet-plugin></vue-leaflet-plugin>-->
    <!--<leafletmap id="myfirstmap"></leafletmap>-->
    <div class="first-container">
      <Lmap id="myfirstmap" ref="myfirstmap">

        <Lmarker :options="this.firstMapMarkerOptions"></Lmarker>
      </Lmap>

    </div>
    <br>
    <button @click="handleClick()">show/hide map</button>


    <div v-show='showMap' class="second-container">
      <Lmap id="mysecondmap" ref="mysecondmap" :options="this.secondOptions">
        <Lmarker :options="this.secondMapMarkerOptions"></Lmarker>
      </Lmap>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showMap: false,
        secondOptions: {
          zoom: 13,
          center: [41.7128, -74.0060],
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          attribution: 'vue-leaflet',
          draggable: true,
        },
        firstMapMarkerOptions: {
          LatLng:[40.7128, -74.0060]
        },


        secondMapMarkerOptions: {
          LatLng:[41.7128,-74.0060]
        }
      }

    },
    components: {},
    methods: {
      handleClick() {
        this.showMap = !this.showMap;
        this.$refs.mysecondmap.initResize();
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

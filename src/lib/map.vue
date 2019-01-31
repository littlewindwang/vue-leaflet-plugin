<template>
  <div :id="id" class="default-leaflet-map-container">
    <!--<slot></slot>-->
  </div>
</template>

<script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import Vue from 'vue'

  export default {
    name: "Lmap",
    data() {
      return {
        map: {},
        mapOptions: {
          zoom: 13,
          center: [40.7128, -74.0060],
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          attribution: 'vue-leaflet',
          draggable: true,
        }
      }
    }, props: {
      id: {
        type: String,
        required: true,
        default: 'myfirstmap'
      },
      options:{
        type:Object,
        default:this.mapOptions
      }
    },

    mounted() {
      this.mapOptions=Object.assign(this.mapOptions,this.options);
      this.map = L.map(this.id, this.mapOptions);
      L.tileLayer(this.mapOptions.url).addTo(this.map);
      this.$mapbus.$emit('mapLoaded',this.map);
    },
    methods: {
      initResize() {//this is for display:none scenario
        if (this.map) {
          Vue.nextTick(() => {
            this.map.invalidateSize();
          });
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .default-leaflet-map-container {
    width: 100%;
    height: 100%;
  }
</style>

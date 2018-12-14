<template>
  <div :id="id" class="default-leaflet-map-container">
    <slot></slot>
  </div>
</template>

<script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'

    export default {
        name: "Lmap",
      data(){
          return {
            options:{
              zoom: 13,
              center: [40.7128,-74.0060],
              url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
              attribution: 'vue-leaflet',
              draggable: true,
            }
          }
      },props :{
          id:{
            type:String,
            required:true,
            default:'myfirstmap'
          }
      },

      mounted(){
          console.log(this.id);
          let map=L.map(this.id,this.options);
          L.tileLayer(this.options.url).addTo(map);
      }
    }
</script>

<style scoped lang="scss">
.default-leaflet-map-container{
  width:100%;
  height:100%;
}
</style>

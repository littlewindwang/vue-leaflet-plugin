<template>
    <!--<slot></slot>-->
</template>

<script>
import L from 'leaflet'

  export default {
        name: "Lmarker",
    data(){
          return {
            markerOptions:{
              LatLng:[0,0]
            }
          }
    },

    props:{
      options:{
        type:Object,
        default:this.markerOptions
      }
    },

      created(){



          console.log('created');

          // console.log(this.$mapbus);
            this.$mapbus.$on('mapLoaded',(mapId)=>{
            console.log('received data');
            console.log(mapId);
            if(mapId===this.$parent.map){


              var icon = new L.Icon.Default();
              icon.options.shadowSize = [0,0];


              this.markerOptions=Object.assign(this.markerOptions,this.options);

              // console.log('options');
              // console.log(this.markerOptions);

              console.log('下面把'+this.markerOptions.LatLng+'加入地图');
              L.marker(this.markerOptions.LatLng,{icon:icon}).addTo(mapId);


              console.log('是我的父辈发给我的');
            } else {
              console.log('不知道谁发给我的');
            }

          });


            console.log(this.$parent.map)
      }


    }
</script>

<style scoped>

</style>

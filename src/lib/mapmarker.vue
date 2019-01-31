<template>
    <!--<slot></slot>-->
</template>

<script>


  export default {
        name: "mapmarker",
      created(){
          console.log(this.$mapbus);
      this.$mapbus.$on('mapLoaded',(mapId)=>{
            console.log('received data');
            console.log(mapId);
          })

      }


    }
</script>

<style scoped>

</style>

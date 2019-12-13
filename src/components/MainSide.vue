<template>
   <el-container class="world">
      {{nowLeftState}}
      <component :is="nowLeftState"></component>
  </el-container>
</template>

<script>
import SideTopo from './map/SideTopo.vue'
import {mapGetters} from 'vuex'
export default {
    name:'MainSide',
    components:{
      SideTopo
    },
    computed: {
      ...mapGetters('MapStore',{
        nowLeftState:'showLeftState'
      }),
    },
    
}
</script>
<style scoped>
.world{
  background:url('../assets/images/map_bg.png');
  color:#fff;
}

</style>
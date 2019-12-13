<template>
<el-aside width="200px" >
    <el-menu >
    <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>拓扑</template>
        <el-menu-item-group>
        <el-menu-item index="topo1" @click="clickLeftMain('Topo1')">自定义拓扑</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>地图</template>
        <el-menu-item-group>
        <el-menu-item index="map1"  @click="clickLeftMain('Map1')">全国地图</el-menu-item>
        <el-menu-item index="map2"  @click="clickLeftMain('Map2')">世界地图</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>3D</template>
        <el-menu-item-group>
        <el-menu-item index="d3_1"  @click="clickLeftMain('D31')">3D地球</el-menu-item>
        <el-menu-item index="d3_2"  @click="clickLeftMain('D32')">世界地图</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    </el-menu>
</el-aside>
</template>
<script>


export default {
    name:'LeftSide',
    methods:{
        clickLeftMain(leftState){
            this.$store.dispatch('MapStore/changeLeftClickIndex',leftState)
        }
    }
}
</script>
<style scoped>
.el-menu{
    background:rgba(0,0,0,0);
    color:#fff;
}
.el-submenu{
    border-bottom:1px solid #fff
}
.leftside{
    color:#fff
}
</style>
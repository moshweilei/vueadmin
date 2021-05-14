<template>
  <div class="big">
    <!-- 左边导航 -->
    <div class="left">
      <div class="introduce">
        {{isCollapse==false?'魏磊是最帅的':'帅'}}
      </div>
      <el-menu default-active="1-1" style="height:90%" background-color="#6959CD" text-color="white" :router='true'
        class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <div v-for="(item,index) in menuItems" :key="index">

          <el-menu-item :index="item.name" v-if="item.one==1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.text}}</span>
          </el-menu-item>
          <el-submenu :index="index+''" v-if="item.one==2">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span slot="title">{{item.text}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="item.name" v-for="(item,index) in  item.children" :key="index">{{item.text}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </div>
    <!-- 右边头部 -->
    <div class="top-link">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="white" text-color="#fff"
        active-text-color="#ffd04b">
        <i class="el-icon-s-fold" style="font-size:25px;border:none" @click="playisCollapse"></i>
      </el-menu>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import store from '../../store/index.js'
export default {
  data () {
    return {
      isCollapse: false,
      activeIndex2: '1',
      menuItems: store.state.menuItems
    }
  },
  methods: {
    playisCollapse () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.big {
  display: flex;
  height: 100vh;
}
.top-link {
  width: 80%;
}
.introduce {
  text-align: center;
  height: 50px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.left {
  height: 100%;
}
</style>

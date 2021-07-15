<template>

  <fragment>
    <fragment v-for="(item,index) in menuItems"
              :key="index">
      <el-menu-item :index="item.name"
                    v-if="item.one==1">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
      <el-submenu :index="index+''"
                  v-if="item.one==2">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">{{item.text}}</span>
        </template>
        <!-- 3级菜单 -->
        <el-menu-item-group :index="item.name"
                            v-for="(item,index) in  item.children"
                            :key="index">
          <el-menu-item :index="item.name"
                        v-if="item.one==1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.text}}</span>
          </el-menu-item>
          <el-submenu :index="index+''"
                      v-if="item.one==2">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span slot="title">{{item.text}}</span>
            </template>

            <el-menu-item-group>
              <el-menu-item :index="item.name"
                            v-for="(item,index) in  item.children"
                            :key="index">{{item.text}}
              </el-menu-item>
            </el-menu-item-group>

          </el-submenu>
        </el-menu-item-group>

      </el-submenu>
    </fragment>
  </fragment>

</template>
<script>
export default {
  name: "my-nav",
  data () {
    return {
    }
  },
  props: {
    menuItems: {
      type: Array,
      default: () => {

      }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>
</style>

<template>
  <div class="home">
    <el-container class="box">
      <el-header class="header">
        <div style="font-size:23px;font-weight: 900">电商后台管理系统</div>
        <div></div>
        <div>
          <!-- <el-button type="text" @click="open2">退出</el-button> -->
          <el-button type="info" @click="open2">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '65px' : '200px'" class="left">
          <div class="qq" @click="isCollapse = !isCollapse">|||</div>
          <!-- 左侧 -->

          <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="#545c64"
            :collapse="isCollapse" :collapse-transition="false" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu :index="'/' + item.path" v-for="item in menus" :key="item.id">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>{{ item.authName }}</span>
              </template>

              <el-menu-item :index="'/home/' + it.path" v-for="it in item.children" :key="it.id">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ it.authName }}</span>
              </el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>

        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
          </el-breadcrumb>


 
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getMenusApi } from '@/http/api'
export default {
  data() {
    return {
      menus: [],
      input5: '',
      isCollapse: false

    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    async getMenus() {
      const res = await getMenusApi()
      this.menus = res
      console.log(this.menus);

    },
    open2() {
      this.$confirm('您确认退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/')
        sessionStorage.removeItem("token")
        this.$message({
          type: 'success',
          message: '退出成功!',

        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出'
        });
      });
    }
  },

}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;

}

.qq {
  cursor: pointer;
}


.el-header {
  display: flex;


  div {
    flex: 1;
  }
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  background-color: #373d41;
  text-align: center;
  line-height: 60px;
  color: #fff
}

.el-aside {
  background-color: #4a5064;
  color: #333;
  text-align: center;

  line-height: 30px;
  padding: 5px 0;
}


.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

}

body>.el-container {
  margin-bottom: 40px;

}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #333744;

  border-right: none
}
</style>

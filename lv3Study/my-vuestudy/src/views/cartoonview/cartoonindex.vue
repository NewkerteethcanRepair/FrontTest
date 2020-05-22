<template>
  <div id="menuall">
    <el-container>
      <el-header>
        歪比巴卜动漫数据
        <!-- <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
        <el-menu-item index="1">登录</el-menu-item>
        </el-menu>-->
        <el-button type="primary" id="login" plain>登录</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="aside">
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>-->
            <el-menu
              :default-active="currentroute"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
              router
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">动漫数据</span>
                </template>
                <el-menu-item-group title="信息">
                  <el-menu-item index="/">
                    我的主页
                    <!-- <router-link to="/" index="1-1" tag="el-menu-item">我的主页</router-link> -->
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <span slot="title">操作</span>
                  <!-- <router-link to="/add" index="1-2" tag="el-menu-item">添加</router-link>
                  <router-link to="/update" index="1-3" tag="el-menu-item">删除</router-link>-->
                  <el-menu-item index="/add">
                    添加
                    <!-- <router-link to="/add" index="1-2" tag="el-menu-item">添加</router-link> -->
                  </el-menu-item>
                  <el-menu-item index="/update">
                    更新
                    <!-- <router-link to="/update" index="1-3" tag="el-menu-item">删除</router-link> -->
                  </el-menu-item>
                </el-menu-item-group>

                <el-submenu index="1-4">
                  <span slot="title">slot插槽</span>
                  <el-menu-item index="/slot">slot</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <span slot="title">动漫数据库版</span>
                <el-menu-item-group title="动漫管理">
                  <el-menu-item index="/homeindex">主页</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="操作">
                  <el-menu-item index="/homeadd">添加</el-menu-item>
                  <!-- <el-menu-item index="/homeupdate">修改</el-menu-item> -->
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <span slot="title">vuex语法</span>
                <el-menu-item-group title="辅助函数版本">
                  <el-menu-item index="/vuexcounter">计数器</el-menu-item>
                </el-menu-item-group>

                <!-- <el-menu-item index="/homeupdate">修改</el-menu-item> -->
              </el-submenu>
              <el-submenu index="4">
                <span slot="title">动漫数据库vuex最终版</span>
                <el-menu-item-group title="动漫管理">
                  <el-menu-item index="/vuexindex">主页</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="操作">
                  <el-menu-item index="/vuexadd">添加</el-menu-item>
                  <!-- <el-menu-item index="/vuexupdate/">修改</el-menu-item> -->
                </el-menu-item-group>
              </el-submenu>
              <!-- <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>-->
            </el-menu>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import cartoonindex from "../../components/02-cartoon/cartoonindex";
export default {
  data() {
    return {
      isCollapse: false,
      currentroute: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  // name: 'Home',
  components: {
    // HelloWorld
    // cartoonindex
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    let path = this.$route.path;
    console.log(path);

    this.currentroute = this.$route.path;
  }
};
</script>

<style scope>

#menuall {
  height: 100vh;
}

.aside {
  text-align: left;
  width: 200px;
}
.el-header {
  background-color: rgb(188, 160, 224);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: rgb(188, 160, 224);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #e7d5ff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f3ebff;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: calc(100vh - 120px);
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
#login {
  float: right;
  /* line-height: 40px; */
  margin-top: 10px;
}
</style>
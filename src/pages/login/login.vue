<template>
  <div class="bg">
    <div class="login-bj">

    </div>
    <div class="center"
         :class="inAnimation?'inAnimation':''">
      <el-form :label-position="labelPosition"
               label-width="80px"
               :model="formLabelAlign">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region"
                    type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary"
                 class="login"
                 @click="goLogin()">登录</el-button>
      <!-- <div class="registered">
        <div @click="login()">{{name?'注册':'登录'}}</div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: 'admin',
        region: '123456',
        type: '',
      },
      name: true,
      inAnimation: true
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    login () {
      this.name = !this.name
      this.inAnimation = !this.inAnimation
    },
    goLogin () {

      if (this.name) {
        this.getNews()
      }
      this.formLabelAlign = {
        name: '',
        region: '',
        type: ''
      }
    },


    getNews () {
      localStorage.setItem('token', 'i_am_token')
      this.$message({
        message: '恭喜你，登录成功',
        type: 'success'
      });
      setTimeout(() => {
        this.$router.push({ path: '/Index/Home' }).catch(() => { })
      }, 1000)


    },
  },


}
</script>
<style  scoped>
.bg {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.login-bj {
  width: 500px;
  height: 375px;
  background-image: url("../../assets/img/login-bj.jpg");
  margin-top: 15%;
}
.center {
  width: 400px;
  text-align: center;
  margin-top: 21%;
}
.inAnimation {
  animation-name: example;
  animation-duration: 1s;
}
@keyframes example {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.login {
  width: 100px;
  margin-left: 80px;
}
.registered {
  margin-left: 350px;
}
body {
  width: 100%;
  height: 100vh;
}
</style>
<template>
  <div class="bg">
    <div class="login-bj">

    </div>
    <div class="center" :class="inAnimation?'inAnimation':''">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login" @click="goLogin()">登录</el-button>
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
    // this.getwy()
  },
  mounted () {

  },
  methods: {
    login () {
      this.name = !this.name
      this.inAnimation = !this.inAnimation
    },
    goLogin () {
      if (!this.name) {
        this.psotLogin()
      }
      if (this.name) {
        this.getNews()
      }
      this.formLabelAlign = {
        name: '',
        region: '',
        type: ''
      }
    },
    async getwy () {
      var that = this;
      await this.$http.get('https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_844d927eb431480b89bafa7d5a05f7c8')
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getNews () {
      var that = this;
      await this.$http.post('/contrast', {
        "username": this.formLabelAlign.name, "password": this.formLabelAlign.region
      })
        .then(function (res) {
          console.log(res, "post");
          if (res.code == 200) {
            localStorage.setItem('token', 'i_am_token')
            that.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            setTimeout(() => {
              that.$router.push({ path: '/Main' })
            }, 1000)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
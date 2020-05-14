<template>
  <view class="s-page-wrapper is-100vh">
    <view class="is-33vh has-mgt-10">
      <view
        class="is-flex is-column is-justify-center is-align-center is-height-100"
      >
        <image
          src="../../static/img/common/2da7269b033b5bb586e8f0423ad3d539b700bce6.jpg"
          mode="aspectFit"
          class="logoimg"
        ></image>
      </view>
    </view>
    <view class="content">
      <view class="has-mglr-10">
        <view class="has-mgtb-10">
          <input
            type="number"
            maxlength="11"
            v-model="login.phone"
            placeholder="请输入手机号"
            class="is-input1"
            @input="BindInput"
            data-val="phone"
          />
        </view>
        <view class="has-radius has-mgtb-10">
          <input
            v-model="login.password"
            placeholder="请输入登录密码"
            class="is-input1"
            @input="BindInput"
            data-val="password"
          />
        </view>

        <view class="loginbtn has-radius has-mgtb-20">
          <button :loading="login.loading" @tap="defaultHandlerLogin">
            {{ login.loading ? "登录中..." : "登 录" }}
          </button>
        </view>
      </view>
    </view>
    <view class="is-20vh has-mgt-80 content">
      <navigator
        url="#"
        class="has-radius is-right is-grey has-mgr-20"
        hover-class=""
      >
        <text>忘记密码？</text><text class="is-blue">点击找回</text>
      </navigator>
      <navigator
        url="/pages/ucenter/register"
        class="has-radius is-right is-grey has-mgr-20"
        hover-class=""
      >
        <text>点击</text><text class="is-blue">注册</text>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      login: {
        loading: false,
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    defaultHandlerLogin: function () {
      this.login.loading = true;
      setTimeout((e) => {
        uni.request({
          url: "http://127.0.0.1:3000/admin/login",
          method: "GET",
          data: {
            userphone: this.login.phone,
            userpassword: this.login.password,
          },
          success: (res) => {
            console.log(res);
            // state.studentsdata = res.data
            if (res.data.success) {
              // this.isregistered = true;
              uni.setStorage({
                key: "user",
                data: res.token,
              });
              uni.switchTab({
                url: "/pages/index/index",
              });
            } else {
              // this.isregistered = false;
              uni.showModal({
                title: "提示",
                content: "登录失败，密码或者账号有问题",
                success: function (res) {
                  if (res.confirm) {
                    console.log("用户点击确定");
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                },
              });
            }
            // 你是哪个路径 流弄换哪个路径

            // context.commit('getstudentsdata', res.data)
          },
          fail: () => {},
          complete: () => {},
        });

        this.login.loading = false;
      }, 1500);
      console.log(JSON.stringify(this.login));
    },
    BindInput: function (e) {
      var dataval = e.currentTarget.dataset.val;
      this.login[dataval] = e.detail.value;
      console.log(this.login);
    },
  },
};
</script>

<style>
page {
  min-height: 100%;
  background-color: #ffffff;
}

.content {
  width: 85%;
  margin: 0 auto;
}

.loginbtn button {
  margin-top: 20rpx;
  height: 88rpx;
  width: 100%;
  line-height: 88rpx;
  color: #ffffff;
  font-size: 32rpx;
  border-radius: 44rpx;
  outline: 0;
  display: block;
  margin: 0;
  font-family: inherit;
  background: #f35;
  opacity: 0.8;
}

button:after {
  border: 2rpx solid #f2f2f2;
}

.logoimg {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}

.is-input1 {
  height: 88rpx;
  width: 100%;
  line-height: 88rpx;
  padding: 12rpx;
  color: #353535;
  font-size: 32rpx;
  box-sizing: border-box;
  appearance: none;
  border: 2rpx solid #e5e5e5;
  box-shadow: none;
  border-radius: 44rpx;
  outline: 0;
  display: block;
  padding-left: 30rpx;
  margin: 0;
  font-family: inherit;
  background: #fff;
  resize: none;
}
</style>

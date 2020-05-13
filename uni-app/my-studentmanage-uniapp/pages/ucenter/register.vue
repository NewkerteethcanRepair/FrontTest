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
    <view class="registercontent">
      <view class="has-mglr-10">
        <view class="has-mgtb-10">
          <input
            type="number"
            maxlength="11"
            placeholder="请输入手机号"
            class="is-input1"
            :userphone="userphone"
            @change="binduserChange"
          />
        </view>
        <view class="has-mgtb-10">
          <input
            type="number"
            maxlength="6"
            placeholder="短信验证码"
            class="is-input1"
          />
          <view class="codeimg" @tap="getsmscode">{{ smsbtn.text }}</view>
        </view>

        <view class="has-radius has-mgtb-10">
          <input
            placeholder="请输入登录密码"
            :password="true"
            class="is-input1"
            :userpassword="userpassword"
            @change="bindpwdChange"
          />
        </view>
        <view class="registerbtn has-radius has-mgtb-20">
          <button @tap="registerto">注 册</button>
        </view>
      </view>
    </view>
    <view class="is-20vh has-mgt-80">
      <navigator url="#" class="has-radius is-center is-grey" hover-class="">
        <text>注册即表示同意</text><text class="is-blue">《用户协议》</text>
      </navigator>
      <navigator
        url="/pages/ucenter/login"
        class="has-radius is-center is-grey"
        open-type="switchTab"
      >
        <text>返回</text><text class="is-blue">登录</text>
      </navigator>
    </view>
  </view>
</template>

<script>
// import axio from "axios"
export default {
  data() {
    return {
      smsbtn: {
        text: "获取验证码",
        status: false,
        codeTime: 60,
      },
      register: {},
      isregistered: true,
      timerId: null,
    };
  },
  methods: {
    getsmscode: function () {
      if (this.smsbtn.status == true) {
        console.log("message：", "别着急！短信已经发送了~");
        return false;
      }
      this.smsbtn.status = true; // 这段代码其实应该加在你request请求 短信发送成功后
      this.timerId = setInterval(() => {
        var codeTime = this.smsbtn.codeTime;
        codeTime--;
        this.smsbtn.codeTime = codeTime;
        this.smsbtn.text = codeTime + "S";
        if (codeTime < 1) {
          clearInterval(this.timerId);
          this.smsbtn.text = "重新获取";
          this.smsbtn.codeTime = 60;
          this.smsbtn.status = false;
        }
      }, 1000);
      return false;
    },
    binduserChange(e) {
      // let phonevalue=e.target.value;
      // let passvalue=e.target.userpassword
      this.register.userphone = e.target.value;
      uni.request({
        url: "http://127.0.0.1:3000/admin/getall",
        method: "GET",
        data: {
          userphone: this.register.userphone,
        },
        success: (res) => {
          console.log(res);
          // state.studentsdata = res.data
          if (res.data.length > 0) {
            this.isregistered = true;
          } else {
            this.isregistered = false;
          }
          // 你是哪个路径 流弄换哪个路径

          // context.commit('getstudentsdata', res.data)
        },
        fail: () => {},
        complete: () => {},
      });
    },
    bindpwdChange(e) {
      this.register.userpassword = e.target.value;
    },
    registerto() {
      // if(userphone)

      if (!this.isregistered) {
        uni.request({
          url: "http://127.0.0.1:3000/admin/add",
          method: "GET",
          data: {
            userphone: this.register.userphone,
            userpassword: this.register.userpassword,
          },
          success: (res) => {
            console.log(res);
            // state.studentsdata = res.data
            if (res.data) {
              console.log("123213");
            //   uni.setStorage({
            //     key: "user",
            //     data: res.data[0].userphone,
            //   });
              uni.switchTab({
                url: "/pages/ucenter/login",
              });
            }
            // 你是哪个路径 流弄换哪个路径

            // context.commit('getstudentsdata', res.data)
          },
          fail: () => {},
          complete: () => {},
        });
      } else {
        uni.showModal({
          title: "提示",
          content: "用户已存在",
          success: function (res) {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }
    },
  },
};
</script>

<style>
page {
  min-height: 100%;
  background-color: #ffffff;
}

.registercontent {
  width: 85%;
  margin: 0 auto;
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

.iconfont {
  position: absolute;
  font-size: 40rpx;
  right: 12%;
  z-index: 999;
  width: 105rpx;
  text-align: center;
  color: #353535;
  margin-top: -11%;
  background: #fff;
  border-top-right-radius: 44rpx;
  border-bottom-right-radius: 44rpx;
  height: 80rpx;
  line-height: 80rpx;
}

.codeimg {
  position: absolute;
  font-size: 28rpx;
  right: 12%;
  z-index: 999;
  width: 200rpx;
  text-align: center;
  color: #353535;
  margin-top: -11%;
  background: #fff;
  border-top-right-radius: 44rpx;
  border-bottom-right-radius: 44rpx;
  height: 80rpx;
  line-height: 80rpx;
}

.registerbtn button {
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
</style>

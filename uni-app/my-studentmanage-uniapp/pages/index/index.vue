<template>
  <!-- 	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view> -->
  <view>
    <view class="student-head">
      <text>{{ title }}</text>
      <u-button type="primary">主要按钮</u-button>
    </view>
    <studentlist></studentlist>
  </view>
</template>

<script>
import studentlist from "../../components/studentlist/studentlist.vue";

export default {
  data() {
    return {
      title: "学生列表",
      studentdata: "",
    };
  },
  components: {
    studentlist,
  },
  onLoad() {
    console.log("231");
   
    // this.islogin();
  },
  onShow() {},
  computed: {},
  methods: {
    islogin() {
      uni.getStorage({
        key: "user",
        success(e) {
          e.data; //这就是你想要取的token
          uni.request({
            url: "http://127.0.0.1:3000/admin/islogin", //仅为示例，并非真实接口地址。
            // data: {
            // 	text: 'uni.request'
            // },
            header: {
              // 'custom-header': 'hello' ,//自定义请求头信息
              Authorization: `Bearer ${e.data}`,
            },
            success: (res) => {
              console.log(res.data);
              this.text = "request success";
            },
          });
        },
      });
    },
  },
};
</script>

<style>
/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */

.student-head {
  margin-top: 30rpx;
  padding: 10rpx;
  font-weight: 600;
}
</style>

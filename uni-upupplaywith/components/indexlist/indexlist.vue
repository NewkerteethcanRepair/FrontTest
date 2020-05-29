<template>
  <view>
    <view class="wrap">
      <u-swiper :list="list" :effect3d="true" duration="3000"></u-swiper>
    </view>
    <view>dasdasdas</view>
    <!-- <u-button type="info">信息按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="error">危险按钮</u-button> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: "../../static/uview/lv.jpg",
          title: "蒹葭苍苍，白露为霜。所谓伊人，在水一方"
        },
        {
          image: "../../static/uview/lv.jpg",
          title: "溯洄从之，道阻且长。溯游从之，宛在水中央"
        },
        {
          image: "../../static/uview/lv.jpg",
          title: "蒹葭萋萋，白露未晞。所谓伊人，在水之湄"
        }
      ]
    };
  }
};
</script>

<style  lang="scss" scoped>
.wrap {
  padding: 40rpx;
}
</style>

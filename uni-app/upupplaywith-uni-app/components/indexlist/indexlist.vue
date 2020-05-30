<template>
  <!-- 轮播 -->
  <view>
    <view class="wrap">
      <u-swiper :list="list" :effect3d="true" :border-radius="2" :title="true"></u-swiper>
    </view>
    <!-- 横线 #19be6b -->
	<u-gap height="12" bg-color="rgb(243, 244, 246)" margin-bottom="30" margin-top="30"></u-gap>
    <u-divider color="#000" half-width="200" border-color="#19be6b" margin-top="10">陪玩颜值区</u-divider>

    <!-- <u-button type="warning">立马下单</u-button> -->

    <u-tabs :list="listtypes" :is-scroll="false"  type="warning"  active-color="#19be6b" :current="current" @change="change"></u-tabs>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: "/static/img/upupimg/lunbo (3).jpg",
          title: "蒹葭苍苍，白露为霜。所谓伊人，在水一方"
        },
        {
          image: "/static/img/upupimg/lunbo (4).jpg",
          title: "溯洄从之，道阻且长。溯游从之，宛在水中央"
        },
        {
          image: "/static/img/upupimg/lunbo (5).jpg",
          title: "蒹葭萋萋，白露未晞。所谓伊人，在水之湄"
        }
      ],
      listtypes: [
        {
          name: "英雄联盟"
        },
        {
          name: "地下城"
        },
        {
          name: "夜晚谈心"
        }
      ],
      current: 0
    };
  },
  methods: {
    change(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 40rpx;
}
</style>

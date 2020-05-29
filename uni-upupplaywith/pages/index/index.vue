<template>
  <view>
   <indexlist></indexlist>
  </view>
</template>

<script>
import indexlist from "../../components/indexlist/indexlist";
export default {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
	};
	components:{
    indexlist
	}
  },
  methods: {}
};
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>

 
 
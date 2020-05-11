<template>
	<!-- 	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view> -->
	<view class="student-head">
		<text>{{title}}</text>
	</view>
	<studentlist></studentlist>
</template>

<script>
	import studentlist from "../../components/studentlist/studentlist.vue"
	export default {
		data() {
			return {
				title: '学生列表'
			}
		},
		components: {
			studentlist
		},
		onLoad() {
		 
		},
		methods: {

		}
	}
</script>

<style>
	.content {
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
	}

	.student-head {
		margin-top: 30rpx;
		padding: 10rpx;
		font-weight: 600;
	}
</style>

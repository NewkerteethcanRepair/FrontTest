<template>
	<view>
		<uni-list>
			<!-- <uni-list-item title="标题文字" :show-arrow="false"></uni-list-item>
	    <uni-list-item title="标题文字"></uni-list-item> -->

			<uni-list-item title="学生信息" note="名字 年龄 性别 班级等" :show-badge="true" badge-text="12"></uni-list-item>
			<!--   <uni-list-item title="禁用状态" :disabled="true" :show-badge="true" badge-text="12"></uni-list-item> -->
		</uni-list>

		<uni-collapse>
			<!-- <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
				<view style="padding: 30rpx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
				<view style="padding: 30rpx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item> -->
			<template v-for="(item,index) in studentsdata">
				<uni-collapse-item title="{{item.studentname}}" showAnimation=true>
					<view style="padding: 30rpx;">
						<text>
							性别：{{item.studentsex}} 
						</text>
						<text>
							年龄：{{item.studentage}}
						</text>
						<text>
							班级：{{item.studentsex}}
						</text>
					</view>
				</uni-collapse-item>
			</template>
		</uni-collapse> 

	</view>


</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
	import {createNamespacedHelpers} from "vuex";
	// import {mapState,mapActions} from "Vuex"
	const {mapState,mapActions}=createNamespacedHelpers("students")
	export default {
		data() {
			return {

			};
		},
		components: {
			uniList,
			uniListItem,
			uniCollapse,
			uniCollapseItem
		},
		mounted(){
			// console.log("21321")
			// this.dd();
			// console.log(this.getstudentsdataAsync())
			this.getstudentsdataAsync()
		},
		computed:{
			...mapState(["studentsdata"]),
			
		},
		methods:{
			...mapActions(["getstudentsdataAsync"])
		}
	}
</script>

<style lang="scss">

</style>

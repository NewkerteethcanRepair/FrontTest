<template>
  <view>
    <uni-list>
      <!-- <uni-list-item title="标题文字" :show-arrow="false"></uni-list-item>
      <uni-list-item title="标题文字"></uni-list-item>-->

      <uni-list-item title="学生信息" note="名字 年龄 性别 班级等" :show-badge="true" :badge-text="total"></uni-list-item>
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
      </uni-collapse-item>-->
      <template v-for="(item, index) in studentsdata">
        <uni-collapse-item
          v-bind:title="item.studentname"
          showAnimation="true"
          v-bind:key="item._id+index"
        >
          <view class="everystudent-list" style="padding: 10rpx;">
            <text>性别：{{ item.studentsex }}</text>
            <text>年龄：{{ item.studentage }}</text>
            <text>班级：{{ item.studentsex }}</text>
            <view class="button-control">
              <button class="mini-btn" type="primary" size="mini">修改</button>
              <button
                class="mini-btn"
                type="warn"
                size="mini"
                @tap="deletestudent"
                :key="item._id"
                :id="item._id"
              >删除</button>
            </view>
          </view>
        </uni-collapse-item>
      </template>
    </uni-collapse>
    <uni-pagination
      title="学生列表"
      show-icon="true"
      :pageSize="pageSize"
      :total="total"
      :current="current"
      @change="changePage"
    ></uni-pagination>
    <template>
      <view>
        <uni-fab
          :pattern="pattern"
          :content="content"
          :horizontal="horizontal"
          :vertical="vertical"
          :direction="direction"
          @trigger="trigger"
        ></uni-fab>
      </view>
    </template>
  </view>
</template>

<script>
import uniList from "@/components/uni-list/uni-list.vue";
import uniFab from "@/components/uni-fab/uni-fab.vue";
import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
import uniCollapse from "@/components/uni-collapse/uni-collapse.vue";
import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item.vue";
import { createNamespacedHelpers } from "vuex";
import uniPagination from "@/components/uni-pagination/uni-pagination.vue";
// import {mapState,mapActions} from "Vuex"
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "students"
);
export default {
  data() {
    return {
      pageSize: 5,
      current: 1,
      horizontal: "left",
      vertical: "bottom",
      direction: "horizontal",
      pattern: {
        backgroundColor: "#f8f8f8",

        selectedColor: "#d91688",
        buttonColor: "#d91688"
      },
      content: [
        // {
        //   text: "添加学生",
        // },
        // {
        //   text: "添加班级",
        // },
        {
          text: "添加学生",
          active: false
        },
        {
          text: "添加班级",
          active: false
        }
      ]
    };
  },
  components: {
    uniList,
    uniListItem,
    uniCollapse,
    uniCollapseItem,
    uniPagination,
    uniFab
  },
  mounted() {
    // console.log("21321")
    // this.dd();
    // console.log(this.getstudentsdataAsync())
    this.getstudentsdataAsync();
  },
  computed: {
    ...mapState(["studentsdata", "total"])
  },
  methods: {
    ...mapActions(["getstudentsdataAsync"]),
    ...mapMutations(["changeCurrentPage"]),
    changePage(e) {
      console.log(e.type, e.current);
      let type = e.type;
      let current = e.current;
      this.changeCurrentPage({ type, current });
      this.getstudentsdataAsync();
    },
    trigger(e) {
      console.log(e);
      this.content[e.index].active = !e.item.active;
      uni.showModal({
        title: "提示",
        content: `您${this.content[e.index].active ? "选中了" : "取消了"}${
          e.item.text
        }`,
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
            // uni.navigateTo({
            //    url: '/pages/add/add'
            // });
            uni.navigateTo({
              url: "pages/add/add"
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    deletestudent(e) {
      console.log("213");
      // console.log(_id);
      console.log(e);

      uni.request({
        url: "http://127.0.0.1:3000/student/delete", //仅为示例，并非真实接口地址。
        data: {
          _id: e.target.id
        },
        // header: {
        // 	'custom-header': 'hello' //自定义请求头信息
        // },
        success: res => {
          console.log(res.data);
          this.getstudentsdataAsync();
          this.text = "request success";
          //   uni.showModal({
          //     title: "提示",
          //     content: `删除成功
          //     }`,
          //     success: function(res) {
          //       if (res.confirm) {
          //         console.log("用户点击确定");
          //       } else if (res.cancel) {
          //         console.log("用户点击取消");
          //       }
          //     }
          //   });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.everystudent-list {
  text {
    margin-right: 20rpx;
  }
  .button-control {
    float: right;
    &::after {
      display: block;
      content: " ";
      clear: both;
    }
  }
  button {
    margin: 0 5rpx;
    // float: right;
  }
}
</style>

<template>
  <div>
    <el-page-header @back="goBack" content="数据详情"></el-page-header>
    <!-- <el-button>sadasd</el-button> -->

    <!-- 搜查 -->

    <div style="margin-top: 15px; min-width:10vw; width:30vw">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="电影名字" value="name"></el-option>
          <el-option label="图片路径" value="imgs"></el-option>
          <el-option label="评分" value="value"></el-option>
          <el-option label="类型" value="types"></el-option>
          <el-option label="日期" value="date"></el-option>
          <el-option label="时长" value="time"></el-option>
          <!-- <template v-for="(value,key,index) in tableDatas[0]">
            <template v-if="tableDatas[0]">
              <el-option :label="key" :value="key" :key="index"></el-option>
            </template>
          </template> -->
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="searchbutton"></el-button>
      </el-input>
    </div>

    <!-- table -->
    <el-table
      :data="tableDatas"
      border
      style="width: 100%; min-width:1100px ;margin:10vh auto;"
      id="table-control"
      :max-height="tableHeight"
      :default-sort = "{prop: 'value', order: 'descending'}"
    >
      <el-table-column fixed prop="_id" label="编号" min-width="14%"></el-table-column>
      <!-- <el-table-column label="轮播缩略图" width="" prop="banners_url" align="center"> -->
      <el-table-column fixed prop="imgs" label="预览图" min-width="14%" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imgs" min-width="70" height="90" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="动漫名字" min-width="14%"></el-table-column>
      <el-table-column prop="value" label="评分" min-width="17%" sortable>
        <template slot-scope="scope">
          <el-rate
            v-model="scope.row.value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" min-width="14%"></el-table-column>
      <el-table-column prop="types" label="类型" min-width="14%"></el-table-column>
      <el-table-column prop="time" label="时长" min-width="14%"></el-table-column>

      <el-table-column fixed="right" label="操作" min-width="12%">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index,scope.row)" type="text" size="medium">修改</el-button>
          <el-button type="text" size="medium" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <img src="../../assets/moviesimg (11).jpg" min-width="70" height="70" /> -->

    <!-- 分页 -->
    <div class="block">
      <!-- <span class="demonstration">完整功能</span> -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="current"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const {
  mapActions,
  mapMutations,
  mapGetters,
  mapState
} = createNamespacedHelpers("cartoonindex");
export default {
  // props: [],
  data() {
    return {
      tableHeight: 520,
      tablewidth: 200,
      //   maxheight:"70vh",
      realimg: "",
      tableData: [],
      // page
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      input3: "",
      select: "name",
      issearch:"",
    };
  },
  computed: {
    ...mapState(["cartoondata", "total", "pageSize", "current"]),
    ...mapGetters(["packcartoondata"]),
    tableDatas() {
      return this.packcartoondata;
    }
  },
  watch: {
    // tableDatas(newval,oldval){
    //   return newval
    // }
    total() {
      this.getcartoondataAsync();
    },
    // packcartoondata() {
    //   // this.getcartoondataAsync();
    // },
    pageSize() {
      this.getcartoondataAsync();
    },
    current() {
      this.getcartoondataAsync();
    },
    issearch(){
       this.getcartoondataAsync();
    }
  },

  mounted() {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     // let heightStyle = that.$refs.tableCot.offsetHeight
    //     this.Height = window.innerHeight
    //   })()
    // }
    this.getcartoondataAsync();
    // this.getcartoondata();
    // this.tableData=this.packcartoondata;
    // this.tableData=[...this.tableData]
    // [...this.tableData]
  },
  methods: {
    ...mapActions(["getcartoondataAsync"]),
    ...mapMutations([
      "getcartoondata",
      "storehandleSizeChange",
      "storehandleCurrentChange",
      "storesearch"
    ]),
    goBack() {
      console.log("go back");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleEdit(index, row) {
      console.log(index, row);
      // 方式2
      // this.$router.push({ path: "/homeupdate", params: { _id: row._id } });
      // 俺的方法

      // this.$router.push({ path: "/homeupdate", query: { _id: row._id } });

      // 方式1
      this.$router.push(`/vuexupdate/${row._id}`);
    },
    handleDelete(index, row) {
      console.log(index, row);
      let rowimgarray = row.imgs.split("/");
      let rowimg = rowimgarray[rowimgarray.length - 1];
      console.log(rowimg);

      axios
        .get("/cartoon/delete", {
          params: {
            _id: row._id,
            imgs: rowimg
          }
        })
        .then(response => {
          console.log(response);
          this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success"
          });
          this.tableDatas.splice(index, 1);
          this.getcartoondataAsync();
        })
        .catch(function(error) {});
    },

    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.storehandleSizeChange(val);
      // this.getcartoondataAsync()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.storehandleCurrentChange(val);
      //  this.getcartoondataAsync()
    },
    // 搜查
    searchbutton(val) {
      console.log(this.select, this.input3);
      let type = this.select;
      let value = this.input3;
      this.storesearch({ type, value });
      this.issearch=this.input3

    }
  }
};
</script>
<style >
/* #table-control{
    max-height: 60vh;
} */
.el-select {
  width: 120px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

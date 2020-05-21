<template>
  <div>
    <el-page-header @back="goBack" content="数据详情"></el-page-header>
    <!-- <el-button>sadasd</el-button> -->
    <el-table
      :data="tableDatas"
      border
      style="width: 100%; min-width:1100px ;margin:50px auto"
      id="table-control"
      :max-height="tableHeight"
    >
      <el-table-column fixed prop="_id" label="编号" min-width="14%"></el-table-column>
      <!-- <el-table-column label="轮播缩略图" width="" prop="banners_url" align="center"> -->
      <el-table-column fixed prop="imgs" label="预览图" min-width="14%" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imgs" min-width="70" height="90" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="动漫名字" min-width="14%"></el-table-column>
      <el-table-column prop="value" label="评分" min-width="17%">
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
  </div>
</template>

<script>
import axios from "axios";
import {createNamespacedHelpers} from "vuex";
const  {mapActions,mapMutations,mapGetters,mapState} =createNamespacedHelpers("cartoonindex")
export default {
  // props: [],
  data() {
    return {
      tableHeight: 500,
      tablewidth: 200,
      //   maxheight:"70vh",
      realimg:"",
      tableData: [
       
      ]
    };
  },
  computed: {
    ...mapState(["cartoondata"]),
    ...mapGetters(["packcartoondata"]),
    tableDatas(){
      return this.packcartoondata
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
    this.tableData=this.packcartoondata;
    // this.tableData=[...this.tableData]
    // [...this.tableData]
  },
  methods: {
    ...mapActions(["getcartoondataAsync"]),
    ...mapMutations(["getcartoondata"]),
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
      let rowimgarray=row.imgs.split("/");
      let rowimg=rowimgarray[rowimgarray.length-1];
      console.log(rowimg);
      
      axios
        .get("/cartoon/delete", {
          params: {
            _id: row._id,
            imgs:rowimg
          }
        })
        .then((response)=> {
          console.log(response);
          this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success"
          });
          [...this.tableData.splice(index, 1)];
        })
        .catch(function(error) {});
      //   let list=this.tableData.fliter((item,index1)=>{
      //       if(index!==index1){
      //         //    item.splice(index,row);
      //            return item

      //       }
      //   })
      //   this.tableData=[...list]

      // console.log(row);

      // row.splice(index,1)
    },
   
  }
};
</script>
<style scoped>
/* #table-control{
    max-height: 60vh;
} */
</style>

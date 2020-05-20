<template>
  <div>
    <el-page-header @back="goBack" content="数据详情"></el-page-header>
    <!-- <el-button>sadasd</el-button> -->
    <el-table
      :data="tableData"
      border
      style="width: 100%; min-width:1100px ;margin:50px auto"
      id="table-control"
      :max-height="tableHeight"
     
    >
      <el-table-column fixed prop="id" label="编号" min-width="14%"></el-table-column>
      <!-- <el-table-column label="轮播缩略图" width="" prop="banners_url" align="center"> -->
      <el-table-column fixed prop="imgs" label="预览图" min-width="14%" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imgs" min-width="70" height="90" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="动漫名字" min-width="14%"></el-table-column>
      <el-table-column prop="value" label="评分" min-width="14%">
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
export default {
  props:[],
  data() {
    return {
      tableHeight:500,
      tablewidth: 200,
      //   maxheight:"70vh",
      tableData: [
        {
          id: "3214214213",
          imgs: require("@/assets/moviesimg (11).jpg"),
          //   img: "./img/moviesimg (11).jpg",
          date: "2019-05-03",
          name: "神之塔",
          types: "冒险",
          time: "23",
          value: 4.8,
          //   address: '上海市普陀区金沙江路 1518 弄',
          //   zip: 200333
        },
        {
          id: "321421421323",
          imgs: require("@/assets/moviesimg (10).jpg"),
          //   img: "./img/moviesimg (11).jpg",
          date: "2019-05-03",
          name: "大飒飒的",
          types: "冒险",
          time: "23",
          value: 4.8
          //   address: '上海市普陀区金沙江路 1518 弄',
          //   zip: 200333
        },
        {
          id: "3214214213",
          imgs: require("@/assets/moviesimg (13).jpg"),
          //   img: "./img/moviesimg (11).jpg",
          date: "2019-05-05",
          name: "大发放",
          types: "冒险",
          time: "23",
          value: 4.1
          //   address: '上海市普陀区金沙江路 1518 弄',
          //   zip: 200333
        },
        {
          id: "3214214213",
          imgs: require("@/assets/moviesimg (9).jpg"),
          //   img: "./img/moviesimg (11).jpg",
          date: "2019-05-05",
          name: "大萨达",
          types: "冒险",
          time: "23",
          value: 2.2
          //   address: '上海市普陀区金沙江路 1518 弄',
          //   zip: 200333
        },
        {
          id: "3214214213",
          imgs: require("@/assets/moviesimg (7).jpg"),
          //   img: "./img/moviesimg (11).jpg",
          date: "2019-05-05",
          name: "大萨达",
          types: "冒险",
          time: "23",
          value: 3.2
          //   address: '上海市普陀区金沙江路 1518 弄',
          //   zip: 200333
        }
      ]
    };
  },
  mounted () {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     // let heightStyle = that.$refs.tableCot.offsetHeight
    //     this.Height = window.innerHeight
    //   })()
    // }
  },
  methods: {
    goBack() {
      console.log("go back");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({path:'/update',query:{id:row.id}});
    },
    handleDelete(index, row) {
      console.log(index, row);
      //   let list=this.tableData.fliter((item,index1)=>{
      //       if(index!==index1){
      //         //    item.splice(index,row);
      //            return item

      //       }
      //   })
      //   this.tableData=[...list]
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        });
      [...this.tableData.splice(index, 1)];
      // console.log(row);

      // row.splice(index,1)
    }
  }
};
</script>
<style>
/* #table-control{
    max-height: 60vh;
} */
</style>

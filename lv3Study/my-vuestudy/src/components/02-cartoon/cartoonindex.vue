<template>
  <div>
    <el-page-header @back="goBack" content="数据详情"></el-page-header>
    <!-- <el-button>sadasd</el-button> -->
    <el-table :data="tableData" border style="width: 100%" id="table-control" max-height="500">
      <el-table-column fixed prop="id" label="编号" width="200"></el-table-column>
      <!-- <el-table-column label="轮播缩略图" width="" prop="banners_url" align="center"> -->
      <el-table-column fixed prop="imgs" label="预览图" width="200" align="center">
        <template slot-scope="scope">
        
          <img :src="scope.row.imgs" min-width="70" height="90" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="动漫名字" width="200"></el-table-column>
      <el-table-column prop="date" label="日期" width="200"></el-table-column>
      <el-table-column prop="types" label="类型" width="200"></el-table-column>
      <el-table-column prop="time" label="时长" width="200"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <img src="../../assets/moviesimg (11).jpg" min-width="70" height="70" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   maxheight:"70vh",
      tableData: [
        {
          id: "3214214213",
          imgs: require("@/assets/moviesimg (11).jpg"),
          //   img: "./img/moviesimg (11).jpg",
          date: "2019-05-03",
          name: "神之塔",
          types: "冒险",
          time: "23"
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
          time: "23"
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
          time: "23"
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
          time: "23"
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
          time: "23"
          //   address: '上海市普陀区金沙江路 1518 弄',
          //   zip: 200333
        },
      ]
    };
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
    [...this.tableData.splice(index,1)]
        // console.log(row);
        
        // row.splice(index,1)
        
    },
  }
};
</script>
<style>
/* #table-control{
    max-height: 60vh;
} */
</style>
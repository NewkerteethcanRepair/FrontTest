import axios from "axios";
export default {
  namespaced: true,
  state: {
    cartoondata: [],
    searchType: "status",
    searchValue: "",
    pageSize: 5,
    current: 1,
    total: 0,
    updatedata:"",
  },
  mutations: {
    getcartoondata(state, data) {
      state.cartoondata = data.data3;
      state.total = data.count;
      //   console.log(state.cartoondata);
    },
    // "handleSizeChange","handleCurrentChange"
    storehandleSizeChange(state, val) {
      state.pageSize = val;
    },
    storehandleCurrentChange(state, val) {
      state.current = val;
    },
    storesearch(state, val) {
      console.log(val);

      state.searchType = val.type;
      state.searchValue = val.value;
    },
    // getcount(state,data){

    // }
    // 更新数据
    updatecartoondata(state,data){
      state.updatedata=data.data3
    }
  },
  actions: {
    // getTypesAsync(context){
    //     axios.get('/types/getAll').then(res =>{
    //         context.commit('getGoodsType',res.data)

    //     })
    // },
    async getcartoondataAsync(context) {
      const searchType = context.state.searchType;
      const searchValue = context.state.searchValue;
      const current = context.state.current;
      const pageSize = context.state.pageSize;
      const { data } = await axios.get("/cartoon/getall", {
        params: { current, pageSize, searchType, searchValue },
      });
      //   console.log(2222, data);

      context.commit("getcartoondata", data);
    },

    // 更新
    async updatecartoondataAsync(context, val) {
      // const searchType=context.state.searchType
      // const searchValue=context.state.searchValue
      // const current=context.state.current
      // const pageSize=context.state.pageSize
      console.log("_id",val);
      
      const { data } = await axios.get("/cartoon/getall", {
        params: {
          _id:val,
        },
      });
      //   console.log(2222, data);

      context.commit("updatecartoondata", data);
    },
  },
  getters: {
    packcartoondata(state) {
      //   console.log(11111, state);

      let d = state.cartoondata.map((item) => {
        if (item.imgs.length > 0) {
          // item.imgs=require(`@/assets/${item.imgs}`);
          //  this.tableData[i].banners_url="http://localhost:3000/files/"+a;
          //  this.realimg=item.imgs;
          item.imgs = "http://localhost:3000/files/" + item.imgs;
          item.value = item.value - 0;
          if (item.date) {
            item.date = item.date.substring(0, 10);
          }
        }
        item.time = item.time + "分钟";

        return item;
      });

      return d;
    },
    packupdatedata(state){
      console.log(12321,state.updatedata[0]);
      let d=state.updatedata[0];
      d.imgs = "http://localhost:3000/files/" +  d.imgs;
      d.value = d.value - 0;
      return d;
      // let d = state.updatedata.map((item) => {
      //   if (item.imgs.length > 0) {
      //     // item.imgs=require(`@/assets/${item.imgs}`);
      //     //  this.tableData[i].banners_url="http://localhost:3000/files/"+a;
      //     //  this.realimg=item.imgs;
      //     item.imgs = "http://localhost:3000/files/" + item.imgs;
      //     item.value = item.value - 0;
      //     if (item.date) {
      //       item.date = item.date.substring(0, 10);
      //     }
      //   }
      //   item.time = item.time + "分钟";

      //   return item;
      // });

      // return d;
    },
  },
};

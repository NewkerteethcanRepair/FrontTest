import axios from "axios";
export default {
  namespaced: true,
  state: {
    cartoondata: [],
  },
  mutations: {
    getcartoondata(state, data) {
      state.cartoondata = data;
    //   console.log(state.cartoondata);
    },
  },
  actions: {
    // getTypesAsync(context){
    //     axios.get('/types/getAll').then(res =>{
    //         context.commit('getGoodsType',res.data)

    //     })
    // },
    async getcartoondataAsync(context) {
      const { data } = await axios.get("/cartoon/getall");
    //   console.log(2222, data);

      context.commit("getcartoondata", data);
      //       .then(res => {
      //           if(res.data){
      //                     this.tableData = res.data;
      //         this.tableData = this.tableData.map((item, index) => {
      //           console.log(item.imgs);
      //           if (item.imgs.length > 0) {

      //             // item.imgs=require(`@/assets/${item.imgs}`);
      //             //  this.tableData[i].banners_url="http://localhost:3000/files/"+a;
      //             //  this.realimg=item.imgs;
      //             item.imgs = "http://localhost:3000/files/" + item.imgs;

      //           }
      //           item.time = item.time + "分钟";

      //           return item;
      //         });
      //           }
      //       })
      //       .catch(err => {
      //         console.error(err);
      //       });
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
        }
        item.time = item.time + "分钟";

        return item;
      });

      return d;
    },
  },
};

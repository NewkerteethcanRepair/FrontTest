import Vue from 'vue'
import Vuex from 'vuex'
import cartoonindex from "./modules/cartoonindex"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
  },
  mutations: {
    increment(){

    },
    decrement(){

    }
  },
  actions: {
    
  },
  modules: {

    cartoonindex
  }
})

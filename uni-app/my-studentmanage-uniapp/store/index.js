import Vue from "vue";
import Vuex from "vuex";
import students from "./modules/students.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		students
	}
})
export default {
	namespaced: true,
	state: {
		studentsdata: "",
	},
	mutations: {
		getstudentsdata(state, payload) {

			state.studentsdata=payload
		}
	},
	actions: {

		getstudentsdataAsync(context) {
			console.log("312")
			uni.request({
				url: 'http://127.0.0.1:3000/student/getall',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data)
					// state.studentsdata = res.data

					// 你是哪个路径 流弄换哪个路径


					context.commit('getstudentsdata', res.data)

				},
				fail: () => {},
				complete: () => {}
			});
		}
		// uni.req

	},
	// getters: {},

}

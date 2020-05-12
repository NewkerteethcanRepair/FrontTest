export default {
	namespaced: true,
	state: {
		studentsdata: "",
		current:1,
        pageSize:5,
        total:0,
	},
	mutations: {
		getstudentsdata(state, payload) {

			state.studentsdata=payload.data3
			state.total=payload.total1
			// console.log(payload);
			
		},
		changeCurrentPage(state,val){
			console.log(val.type);
			
			if(val.type=="next"){

				state.current=val.current;
				// state.current+=1;
			}
			else if(val.type=="prev"){
				state.current=val.current;
				// state.current-=1;
			
				
			}

			// state.pageSize=val.pageSize;
		}
	},
	actions: {

		getstudentsdataAsync(context) {

			let current =context.state.current;
			let pageSize=context.state.pageSize;
			// let total=context.state.total;

			console.log("312")
			uni.request({
				url: 'http://127.0.0.1:3000/student/getall',
				method: 'GET',
				data: {
					current,pageSize
				},
				success: res => {
					console.log(res)
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

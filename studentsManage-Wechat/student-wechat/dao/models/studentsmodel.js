const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    
    studentname :{   
        type:String,
        default:"香香"
    },
    studentage:{
        type:Number,
        default:'23'
    },
    studentsex:{
        type:String,
        default:'男'
    },
    classid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'classModel'
    },
    // OrderMoviesTime:{
    //     type:String,
    //     default:"15:35"
    // },
    // OrderRoom:{
    //     type:String,
    //     default:"3号厅"
    // },
    // OrderSeat:{
    //     type:Array,
    //     default:[[2,3],[4,5],[1,2]]
    // },
    // OrderPrice:{
    //     type:String,
    //     default:"35"
    // },
    // OrderTotal:{
    //     type:String,
    //     default:"130"
    // }

    // listImage:String,
    // detailImage:Array,
    // price:String,
    // comments:Array,
    // details:String
})
mongoose.model('studentModel',studentSchema,'student')
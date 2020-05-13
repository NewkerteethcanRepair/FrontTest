const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({
    
    userphone :{   
        type:String,
        default:"17713601303"
    },
    userpassword:{
        type:String,
        default:"123"
    },
    // studentsex:{
    //     type:String,
    //     ref:'男'
    // },
    // classid:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'classModel'
    // },
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
mongoose.model('adminModel',adminSchema,'admin')
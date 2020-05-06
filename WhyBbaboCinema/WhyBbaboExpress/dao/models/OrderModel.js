const mongoose=require('mongoose')
const OrderSchema=new mongoose.Schema({
    
    MoviesInforId :{   
        type:mongoose.Schema.Types.ObjectId,
        ref:'MoviesInforSchemaModel'
    },
    VipUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'VipUserModel'
    },
    CinemaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'wbCinemaModel'
    },
    OrderTime:{
        type:String,
        default:"2020-05-05"
    },
    OrderMoviesTime:{
        type:String,
        default:"15:35"
    },
    OrderRoom:{
        type:String,
        default:"3号厅"
    },
    OrderSeat:{
        type:Array,
        default:[[2,3],[4,5],[1,2]]
    },
    OrderPrice:{
        type:String,
        default:"35"
    },
    OrderTotal:{
        type:String,
        default:"130"
    }

    // listImage:String,
    // detailImage:Array,
    // price:String,
    // comments:Array,
    // details:String
})
mongoose.model('OrderModel',OrderSchema,'Order')
const mongoose=require("mongoose");
const wbCinemaSchema=new mongoose.Schema({
    CinemaName:{
        type:String,
        default:"歪比巴卜电影院"
    },
    address:{
        type:String,
        default:"Aa1新都区斑竹园镇中利路169号北欧商业广场4号楼4楼23456"
    },
    Phone:{
        type:Array,
        default:["0fps厅","折扣卡"]
    }

})
mongoose.model('wbCinemaModel',wbCinemaSchema,'WbCinema')
const mongoose=require("mongoose");
const VipUserSchema=new mongoose.Schema({
    VipName:{
        type:String,
        default:"歪比巴卜"
    },
    VipPassword:{
        type:String,
        default:"Aa123456"
    },
    Phone:{
        type:Number,
        default:1881881888
    }

})
mongoose.model('VipUserModel',VipUserSchema,'VipUser')
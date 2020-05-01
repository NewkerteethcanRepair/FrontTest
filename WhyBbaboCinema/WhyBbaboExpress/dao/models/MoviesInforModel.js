const mongoose=require("mongoose");
const MoviesInforSchema=new mongoose.Schema({
    MoviesName:{
        type:String,
        default:"神之塔"
    },
    Director:{
        type:String,
        default:"sol"
    },
    Starring:{
        type:Array,
        default:[ "西但是夏",
        "haho",
        "提提",
        "达道湾"]
    },
    Movieimg:{
        type:String,
        default:"moviesimg (11)"
    },
    Country:{
        type:String,
        default:"韩国"
    },
    Type:{
        type:String,
        default:"冒险"
    },
    Time:{
        type:String,
        default:"2020-04-15"
    },
    Comment:{
        type:Array,
        default:[ {"xxxx": "嘻嘻还不错"}]
    },
    DetailInfor:{
        type:String,
        default:"撒活动撒即可良好的微群受打击了好了带爱神的箭你回家山卡拉等会哦暗示健康登录后"
    }

})
mongoose.model('MoviesInforSchemaModel',MoviesInforSchema,'moviesinfor')
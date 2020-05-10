const mongoose=require('mongoose')
const classSchema=new mongoose.Schema({
    
    classname :{   
        type:String,
        default:"web01班"
    },

})
mongoose.model('classModel',classSchema,'class')
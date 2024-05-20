const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'Users',require:true},
    name:{type:String,require:true},
    isDone:{type:Boolean,require,default:false},
})

module.exports=mongoose.model('Task',taskSchema)
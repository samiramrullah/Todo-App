const taskSchema =require('../../models/Task')
const userSchema=require('../../models/User')
exports.addTask=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const {name,isDone}=req.body;
        if(!name) return res.status(400).json({status:false,message:"Invalid Data"});
        const isValidUser=await userSchema.findOne({_id:userId})
        if(!isValidUser) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        const newTask=new taskSchema({
            userId:userId,
            name:name,
            isDone:isDone
        });
        const savedTask=await newTask.save();
        res.status(201).json({
            status:true,
            message:"Task Successfully Added",
            savedTask
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"Failed Addeing the task"
        })
    }
}

exports.getalltask=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const isValidUser=await userSchema.findOne({_id:userId})
        if(!isValidUser) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        const tasks=await taskSchema.find({userId:userId}).select("_id name isDone")
        tasks.sort((taskA, taskB) => {
            if (taskA.isDone === false && taskB.isDone === true) {
                return -1; 
            } else if (taskA.isDone === true && taskB.isDone === false) {
                return 1; 
            } else {
                return 0; 
            }
        });
        res.status(200).json({
            status:true,
            message:"Tasks Successfully Fetched",
            tasks
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"Failed to fetch task"
        })
    }
}
exports.updatetask=async(req,res,next)=>{
      try {
        const {name,isDone,_id}=req.body;
        if(!_id) return res.status(400).json({status:false,message:"Invalid Data"});
        const isValidUser=await userSchema.findOne({_id:userId})
        if(!isValidUser) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        let updatedFiled={}
        if(name) updatedFiled.name=name;
        if(isDone ==true || isDone==false) updatedFiled.isDone=isDone;
        const updatedTask=await taskSchema.findOneAndUpdate({_id:_id},updatedFiled,{new:true})
        if(updatedTask) return res.status(200).json({status:true,message:"Task Successfully Updated",updatedTask})
        return res.status(404).json({ status: false, message: "Task not found" });
      } catch (error) {
        res.status(400).json({
            status:false,
            message:"Failed to update task"
        })
      }
}

exports.deletetask=async(req,res,next)=>{
    try {
        const {_id}=req.body;
        if(!_id) return res.status(400).json({status:false,message:"Invalid Data"});
        const isValidUser=await userSchema.findOne({_id:userId})
        if(!isValidUser) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        const deletedTask=await taskSchema.findOneAndDelete({_id:_id},{new:true})
        if(!deletedTask) return res.status(400).json({status:false,message:"Task not found"})
        return res.status(204).json({status:true,message:"Task Successfully Deleted"})
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"Failed to update task"
        })
    }
}
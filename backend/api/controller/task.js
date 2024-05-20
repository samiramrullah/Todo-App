const taskSchema =require('../../models/Task')
exports.addTask=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const {name,isDone}=req.body;
        if(!name) return res.status(400).json({status:false,message:"Invalid Data"});
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
        const tasks=await taskSchema.find({userId:userId}).select("_id name isDone")
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
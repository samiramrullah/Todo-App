const express=require('express');
const router=express.Router();
const checkAuth=require('../../middleware/check-auth')
const taskController=require('../../controller/task')


router.post('/addtask',checkAuth,taskController.addTask);
router.get('/getalltask',checkAuth,taskController.getalltask);
router.put('/updatetask',checkAuth,taskController.updatetask);
router.delete('/deletetask',checkAuth,taskController.deletetask)

module.exports=router;
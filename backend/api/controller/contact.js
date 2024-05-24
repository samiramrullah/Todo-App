const nodemailer=require('nodemailer');

exports.post=(req,res,next)=>{
   let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        
    }
   })
}
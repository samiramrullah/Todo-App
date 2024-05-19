const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')
const mongooge = require("mongoose");
const userSchema = require("../../models/User");

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!name ||!validator.isEmail(email) ||!password ||!passwordRegex.test(password)) return res.status(400).json({ status: false, message: "Invalid Data" });
        const user = await userSchema.findOne({ email });
        if (user)
            return res.status(400).json({ status: false, message: "Email Already Exists" });
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new userSchema({
            _id: new mongooge.Types.ObjectId(),
            name,
            email,
            password: hashPassword,
        });
        newUser.save();
        res.status(201).json({ status: true, message: "User Successfully Created" });
    } catch (error) {
        res.status(401).json({ status: false, message: "Faild to Register" });
    }
};

exports.login=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password) return res.status(401).json({status:false,message:"Invalid Data"})
        const user=await userSchema.findOne({email})
        if(!user || !(await bcrypt.compare(password,user.password))) return res.status(401).json({status:false,message:"Invalid Credentials"});
        console.log("Here");
        const token=jwt.sign({userId:user._id,email:user.email,name:user.name},process.env.SECRET_KEY)
        res.status(200).json({status:true,message:"Successfully LoggedIn",token})

    } catch (error) {
        res.status(401).json({ status: false, message: "Faild to Login" });   
    }
}
const User = require("../model/user.modal");
const bcryptjs = require("bcryptjs");

async function signUp(req,res){
    try {
        const {fullName,email,password} = req.body;
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message:"User already exist"});

        const hashPassword = await bcryptjs.hash(password,10);

        const createUser = await User.create({
            fullName,email,password :hashPassword
        });
        return res.status(201).json({message : "User created Successfully",user : {
            
            fullName : fullName,
            email : email
        }});
    } catch (error) {
        console.log("error on user route",error);
        return res.status(500).json({message : "Internal server error"})
    }
};


async function login(req,res){
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){ return res.status(400).json({message : "Invalid username or Password"});
    }else {
        return res.status(200).json({message : "Login Successfully",user : {
            fullName : user.fullName,
            email : user.email,
            _id : user._id
        }})
    }

    } catch (error) {
        console.log("error on login user controller route",error);
        return res.status(500).json({message :"Internal Server Error"});
    }
}


module.exports = {
    signUp,login
}
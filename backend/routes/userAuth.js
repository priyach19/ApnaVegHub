const express=require('express');
const router=express.Router();
const User=require('../models/User');
const {body,validationResult}=require('express-validator')
router.post('/createuser',
[   body('email').isEmail(),
    body('password','incorrect password').isLength({min:5}),
    body('name').isLength({min:5})
]
,async(req, res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location:req.body.location
            });
            res.json({success:true})
        }catch(err){
            console.log("error");
            res.json({success:false})
        
        }
})
router.post("/loginuser",[
    body('email').isEmail(),
    body('password','Password incorrect').isLength({min:5})
     ],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    try{
        let user =await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({errors:"try entering correct credentials"})
        }
        if(req.body.password!==user.password){
            return  res.status(400).json({errors:'Incorrect Password'})
        }
        return res.json({success:true})
    
    
    }catch(err){
        console.log(err)
        res.json({success:false})
    }
  

})
module.exports=router;
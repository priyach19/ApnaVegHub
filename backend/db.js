const mongoose=require('mongoose');
const mongoURI='mongodb+srv://mealapp:meal123@cluster0.kjirejh.mongodb.net/Apnaveghub?retryWrites=true&w=majority'
// mongoose.connect(mongoURI)
const connectDB=async()=>{
    try{
        await mongoose.connect(mongoURI)
        console.log("connected to database");
    }catch(err){
        console.log("mongodb database error",err)

    }
}
module.exports=connectDB;
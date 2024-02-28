const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: { type: String, select: false },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
const User=mongoose.model('user',UserSchema)
module.exports=User;
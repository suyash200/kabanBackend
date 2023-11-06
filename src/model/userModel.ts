import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  kanbanId:{
    type:mongoose.Schema.ObjectId,
    ref:'kabanboard'
  }
});

export const userModel=  model('user',UserSchema)

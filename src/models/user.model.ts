//creating user model
import mongoose from "mongoose";
import bcrypt from 'bcrypt' //use this to hash the password
import config from 'config'

const userSchema = new mongoose.Schema({
 email:{type:String, required: true},
 name: {type: String, required: true},
 password: {type: String, required: true}
},
{
    timestamps: true
})
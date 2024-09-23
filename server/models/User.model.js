import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const user = model("User", userSchema);
export default user;
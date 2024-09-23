import { Schema, model,mongoose } from "mongoose";

const addressSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Address = model("Address", addressSchema);
export default Address;
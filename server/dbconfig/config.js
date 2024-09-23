import mongoose from "mongoose";

const dbconnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Successfully Connected to MongoDB");
    }catch(error){
        console.log("Error Connecting to MongoDB");
    }
}

export default dbconnect;
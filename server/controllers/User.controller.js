
import Address from "../models/Address.model.js";
import user from "../models/User.model.js";

export const registerUser =async(req,res) =>{
    const {name, address} = req.body;

    try{
        const User= await user.create({name});
        const userAddress = await Address.create({userId: User._id, address});
        res.status(201).json({success:true, User, address: userAddress })
    }catch(error){
        res.status(500).json({success:false, message: error.message})
    }
}




//improvised section of code (In case if you want to store the username instead of users id in the address table 
// replace this try-catch with the above one )

// try{
//     const User= await user.create({name});
//     const populateUserName = await User.findbyId(user._id).populate("name")
//     const userAddress = await Address.create({userId: populateUserName, address});
//     res.status(201).json({success:true, User, address: userAddress })
// }catch(error){
//     res.status(500).json({success:false, message: error.message})
// }
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnect from "./dbconfig/config.js";
import { userRoutes } from "./routes/User.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});

app.use("/api/user",userRoutes)

const main =()=>{
    try{
        dbconnect();
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}


main();

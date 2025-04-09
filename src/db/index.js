import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

dotenv.config({
    path:'./env'
})


const connectDB=async ()=>{
    try{
        const conn = await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
        console.log("DB Host:",conn.connection.host);
    }
    catch (err){
        console.log('Mongo Connextion failed',err);
        process.exit(1);
    }
}

export default connectDB;
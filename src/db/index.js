import mongoose from "mongoose";
import { DB_NAME } from "../constant";


const connectDB=async ()=>{
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("DB Host:",conn.connection.host);
    }
    catch (err){
        console.log('Mongo Connextion failed',err);
        process.exit(1);
    }
}

export default connectDB;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connection=async()=>{
    try{
        const url=process.env.url;
        await mongoose.connect(url);
        console.log(`Database connected successfully`);
    }
    catch(e){
        console.log(`There was a problem while connecting to database`);
    }
}
export default connection;
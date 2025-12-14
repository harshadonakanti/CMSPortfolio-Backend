import mongoose from "mongoose";
const connectToDb = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL)
  }catch(err){
    console.log(err);
    
  }
}
export default connectToDb
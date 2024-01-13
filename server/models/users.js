import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const userSchema = mongoose.Schema({
  name:String,
  email:String,
  contact:Number,
  address:String
});
const user = mongoose.model('user', userSchema);
export default user;
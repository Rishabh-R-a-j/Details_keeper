import user from '../models/users.js';
const adduser=async(request,response)=>{
    const userv=request.body;
    const newuser=new user(userv);
    try{
        await newuser.save();
        response.status(201).json(newuser);
    }
    catch(error){
        response.status(409).json({message:error.message})
    }
}
const getuser=async(request,response)=>{
    try{
        const users=await user.find({});
        console.log(users);
        response.status(200).json(users);
    }
    catch(error){
       response.status(404).json({message:error.message});
    }
}
export { adduser,getuser};
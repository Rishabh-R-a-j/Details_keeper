import express,{Router} from 'express';
import {adduser,getuser} from '../usercontroller/usercontroller.js';
const routes=express.Router();
routes.post('/add',adduser);
routes.get('/all',getuser);
export default routes;

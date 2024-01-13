import express from 'express';
import connection from './Database/db.js';
import routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use('/',routes);
connection();
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
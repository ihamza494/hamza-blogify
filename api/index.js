import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(
    ()=>{
        console.log('Mongodb connected.');
    }
)
.catch((err)=>{
    console.log('Error occured while connecting with mongodb: '+ err);
})
const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on 3000...");
})
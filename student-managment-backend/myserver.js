const mongoose=require("mongoose");
const express=require("express");
const dotenv=require("dotenv");
const path =require("path");
const cors=require('cors');
const bodyparser=require('body-parser')


const controller = require('./src/mycontrollers/studentcontroller');
//getting uri and port from .env file
dotenv.config({path:".env.txt"});

const PORT = process.env.PORT||5500

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then(() => {
        console.log("connected to database");
        }).catch(err => {
            console.log(err);
            });
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.post('/myapi/mystudent',controller.addStudent);
app.get('/myapi/all',controller.getAll);
app.get('/myapi/:studentId',controller.findStudent);
app.get('/myapi/mystudents/maxid',controller.maxId);
app.put('/myapi/mystu',controller.updateStudent);
app.delete('/myapi/mystudents/:delrec',controller.deleteStudent);
app.listen(PORT,()=>console.log(`server is running on port http://localhost:${PORT}`));
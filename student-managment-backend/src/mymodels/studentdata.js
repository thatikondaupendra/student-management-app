const mongoose=require("mongoose")
const Shema=mongoose.Schema
const student=new Shema({
    StudentId:Number,
    StudentName:String,
    branch:String,
    yearofjoining:String,
    totalfee:Number,
    paidfee:Number,
    balancefee:Number
},
{
    collection:'studentdata'
});
const studentdata=mongoose.model("student",student);
module.exports=studentdata;
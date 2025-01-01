const student = require("../mymodels/studentdata");
const express = require("express");

exports.getAll = (req,res,next)=>{
    console.log("getall");
    student.find().then((data)=>{
        res.json(data);
        }).catch((err)=>{
            res.json(err);
            });
}

exports.findStudent = async (req, res, next) => { 
    console.log("/mybook --- get()"); 
    try {
        const data = await student.findOne({ 
            StudentId: parseInt(req.params.studentId) });
        console.log(data);
        if (!data) {
          return res.status(404).json({ message: "Course not found" });
        }
        res.json(data); 
      } catch (error) { 
        next(error); 
      } 
};

exports.updateStudent = async (req, res, next) => {
    console.log("/updateStudent - put()"); // Updated endpoint name
    console.log("request body -- ",req.body); // Log the StudentId from the request body
    console.log(req.body.paidfee); // Log the entire request body

    try {
        // Find the student by StudentId and update it with the new data
        const updatedStudent = await student.findOneAndUpdate(
            { StudentId: req.body.StudentId }, // Query to find the student
            req.body, // Data to update
            { new: true } // Option to return the updated document
        );
        console.log("updatedstudent",updatedStudent);

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' }); // Handle case where student is not found
        }

        res.status(200).json(updatedStudent); // Respond with the updated student
        console.log("Student updated successfully");
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}

exports.deleteStudent=async(req,res,next)=>{
    try {
        const data = await student.findOneAndDelete({
            StudentId: parseInt(req.params.delrec)
            });
            console.log(data);
            res.json(data);
            } catch (error) {
                next(error);
                }
}

exports.maxId = async(req, res, next) => { 
    console.log("/myapi/maxId --- get()"); 
    try{
   const data =await student.find().sort({ 
    StudentId: -1 
}) 
.limit(1); ; 
console.log(data);
        if (data) { 
            res.json(data); 
        } 
    }
    catch(er){
        next(error)
    } 

}; 

//not working code....
//exports.addStudent = (req,res,next)=>{
//
//    const data = new student(req.body);
//    data.save((err, data) => {
//        if (err) {
//            return res.status(400).json({ message: 'Error adding student' });
//            }
//            res.json(data);
//            });
//}


exports.addStudent = async (req, res, next) => {
    try {
        const data = new student(req.body);
        const savedData = await data.save();
        res.status(201).json(savedData); // Use 201 status for resource creation
    } catch (err) {
        res.status(400).json({ message: 'Error adding student', error: err.message });
    }
};


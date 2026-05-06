const Task = require("../models/Task");

//create the task
const createTask = async(req,res)=>{
    try {
        const{title} = req.body;
        const Task = await  Task.create({
            title,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

//get all the task 
const getAllTask = async(req,res)=>{
    try {
        const tasks = await Task.find(); 
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

//update task 
const updateTask = async(req,res)=>{
    try {
        const tasks = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
            }
        );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

//delete theb task
const deleteTask = async(req, res)=>{
    try {
        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message:"Task deleted",
        });
        
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        });
    }
};

module.exports = {
    createTask,
    getAllTask,
    updateTask,
    deleteTask,
};
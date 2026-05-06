const express = require("express");

const{
    createTask,
    getAllTask,
    updateTask,
    deleteTask,
    } = require("../controller/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

module.exports = router;
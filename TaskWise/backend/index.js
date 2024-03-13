import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { TaskModel } from "./models/TaskModel.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/taskwise")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.post("/createTask", async (req, res) => {
  try {
    const newTask = await TaskModel.create(req.body);
    res.json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/updateTask/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await TaskModel.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.put("/updateTask/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await TaskModel.findByIdAndDelete({ _id: id });
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

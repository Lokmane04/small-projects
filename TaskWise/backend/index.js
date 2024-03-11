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
    console.log(err);
  });

app.post("/createTask", (req, res) => {
  TaskModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  TaskModel.find({})
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.get("/updateTask/:id", async (req, res) => {
  const id = req.params.id;
  TaskModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});
app.put("/updateTask/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  TaskModel.findByIdAndUpdate({ _id: id }, updateData)
    .then((updatedTask) => res.json(updatedTask.title))
    .catch((err) => console.log(err));
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndDelete({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.listen("3001", () => console.log("Server is running on port 3001"));

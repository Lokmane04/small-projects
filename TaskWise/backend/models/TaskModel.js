import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: {
    type: String,
    default: "medium",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const TaskModel = mongoose.model("tasks", TaskSchema);

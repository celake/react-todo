import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true
   },
   dueDate: {
    type: Date,
    required: false
   },
   complete: {
    type: Boolean,
    default: false
   }
}, {
    timestamps: true //createdAt, updatedAt
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
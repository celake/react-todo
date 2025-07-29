import mongoose from 'mongoose';
import Task from '../models/task.model.js'

import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`) ;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  // process code 1 is exit with failure, code 0 is success
    }
}
connectDB();

const newTasks = [
    {
        title: 'Walk Dogs',
        dueDate: "2025-08-01"
    },
    {
        title: 'Train dogs',
        dueDate: "2025-08-01"
    },
     {
        title: 'Feed Dogs',
        dueDate: "2025-08-01"
    },
    {
        title: 'Sing to Dogs',
        dueDate: "2025-08-01"
    }, 
    {
        title: 'Finish React todo list',
        dueDate: "2025-08-02"
    }, 
     {
        title: 'Set up work station',
        dueDate: "2025-08-01"
    }, 
]

const seedDB = async () => {
    console.log("seedDB function")
    await Task.deleteMany({});
    await Task.insertMany(newTasks);
}

seedDB().then(() => {
    mongoose.connection.close();
})
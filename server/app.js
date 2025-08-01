import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    connectDB();
    console.log(`Listening on port ${PORT}`);
})
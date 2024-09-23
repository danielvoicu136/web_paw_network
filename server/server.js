import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './backend/db/connectDB.js';

import authRoutes from "./backend/routes/auth.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World! Your MERN app is deployed.');
  });

app.use("/api/auth", authRoutes);


app.listen(PORT , () => {
    connectDB();
    console.log("Server is running on port : " , PORT)
    }
)
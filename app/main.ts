import express from 'express'
import AuthRouter from './Routes/Auth'
import AppRouter from './Routes/App'
import cors from 'cors';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";
dotenv.config();


const app = express()

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
};

app.use(requestLogger)
// JSON serialization
app.use(express.json())


//cores
app.use(cors())

//Auth Router
app.use('/', AuthRouter)

//App Router
app.use('/', AppRouter)



app.listen(3000, '0.0.0.0', () => {
    console.log("server is running on port 3000")
})


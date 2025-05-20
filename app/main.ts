import express from 'express'
import AuthRouter from './Routes/Auth'
import AppRouter from './Routes/App'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express()

// JSON serialization
app.use(express.json())


//cores
app.use(cors())

//Auth Router
app.use('/' , AuthRouter)

//App Router
app.use('/' , AppRouter)



app.listen(8000, () => {
    console.log("server is running on port 8000")
})


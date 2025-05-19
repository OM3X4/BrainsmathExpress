import express from 'express'
import AuthRouter from './Routes/Auth'
import AppRouter from './Routes/App'


const app = express()

// JSON serialization
app.use(express.json())

//Auth Router
app.use('/' , AuthRouter)
app.use('/' , AppRouter)



app.listen(8000, () => {
    console.log("server is running on port 8000")
})


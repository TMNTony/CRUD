const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/UserRoutes")

const app = express()
app.use(cors())
app.use(express.json())
app.use(userRouter)

mongoose.connect('mongodb://localhost:27017/crud')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err.message));


app.listen(3001, () => {
    console.log("server is running")
})
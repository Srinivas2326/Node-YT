const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const studentRoutes = require("./routes/student.routes")


const app = express()
const PORT = 5000


// middleware
app.use(express.json())
app.use(cors())


// connect mongoDB
mongoose
    .connect("")
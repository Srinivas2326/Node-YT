const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeRoutes')

const app = express()
const PORT = process.env.PORT || 5000

dotEnv.config()
app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`MongoDB connected successfully`)
})
.catch((err)=>{
    console.log(`MongoDB connection Failed`, err)
})


app.use('/employees', employeeRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeRoutes')
const ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')

dotEnv.config()
app.use(bodyParser.json())

// Client Side Rendering
app.get('/mango', (req, res)=>{
    res.json({fruit:"Mango"})
})

// Server Side Rendering
app.get('/grapes',(req, res)=>{
    res.render('samplePage')
})

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
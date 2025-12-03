const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const ejs = require('ejs')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const User = require('./models/user')


const app = express()

dotEnv.config()

const PORT = process.env.PORT || 8000

app.set("view engine", 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))




mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected Successfully")
    })
    .catch((err)=>{
        console.log(`${err}`)
    })

    const store = new MongoDBStore({
        uri : process.env.MONGO_URI,
        collection : 'mySession'
    })

    app.use(session({
    secret: "This is a secret key",
    resave: false,
    saveUninitialized: true,
    // cookie: {secure:true}
    store:store
}))

app.get('/signup', (req, res)=>{
    res.render('register')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/dashboard', (req, res)=>{
    res.render('welcome')
})


app.post('/signup', async(req, res)=>{
    const {username, email, password} = req.body
    try{
        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save()
        res.redirect('/login')
    }
    catch(err){
        console.log(err)
        res.redirect('/signup')
    }
})


app.listen(PORT, ()=>{
    console.log(`Server started and Running Succesffully on PORT ${PORT}`)
})
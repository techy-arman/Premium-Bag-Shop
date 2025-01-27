const express = require('express')
const deb = require('./config/mongoose-connection')
require("dotenv").config();
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')
const app = express()
const owenersRouter = require('./routes/owenersRouter')
const productsRouter = require('./routes/productsRouter')
const usersRouter = require('./routes/usersRouter')
const indexRouter = require("./routes/index")
const expressSession = require("express-session")
const flash = require("connect-flash")


app.set('view engine', 'ejs')
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(expressSession({
  resave:false,
  saveUninitialized:false,
  secret:process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash())

app.use('/', indexRouter)
app.use('/oweners', owenersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)


// app.get('/', (req, res) => {
//   res.render('index');
// });


app.listen(3000)
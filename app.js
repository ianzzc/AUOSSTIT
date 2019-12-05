const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const dbconfig = require('./db')
// db setup
dbconfig()
// console.log(process.env)
// setup routes
app.use('/', indexRouter)
app.use('/api', apiRouter)
app.listen('3000', () => { console.log('App Listening on port 3000') })

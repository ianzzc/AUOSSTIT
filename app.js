const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const mockRouter = require('./routes/mock')
const dbconfig = require('./db')
// db setup
dbconfig()
// console.log(process.env)
// setup routes
app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/mock', mockRouter)
app.listen('8888', () => { console.log('App Listening on port 8888') })

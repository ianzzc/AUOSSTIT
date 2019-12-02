const express = require('express')
const app = express()
const indexRouter = require('./routes/index.js')
const apiRouter = require('./routes/api.js')
// setup routes
app.use('/home', indexRouter)
app.use('/api', apiRouter)
app.listen('3000', () => { console.log('App Listening on port 3000') })

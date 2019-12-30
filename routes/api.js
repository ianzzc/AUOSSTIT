const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('API Page')
})
router.get('/user', (req, res, next) => {
  res.send('API User Page')
})
router.post('/mainSearch', (req, res, next) => {
  res.send('mainSearch Page')
})

module.exports = router

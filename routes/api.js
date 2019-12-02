const express = require('express')
const router = express.Router()

/* GET home page. */
router.use('/', (req, res, next) => {
  res.send('API Page')
})

module.exports = router

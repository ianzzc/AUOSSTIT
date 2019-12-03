const express = require('express')
const router = express.Router()

/* GET home page. */

router.get('/', (req, res, next) => {
  console.log(typeof (router.stack))
  res.send('Home')
})

// router is a function
module.exports = router

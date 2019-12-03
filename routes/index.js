const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(router.stack[0])
  res.send('Home Page')
})

// router is a function
module.exports = router

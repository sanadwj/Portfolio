const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

  res.send('This is the main route!')
})

module.exports = router
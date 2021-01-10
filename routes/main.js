const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const data = req.context

  res.render('home', data)
})

router.get('/projects', (req, res, next) => {
  const data = req.context

  res.render('projects', data)
})

module.exports = router
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

router.get('/', async (req, res, next) => {
  const data = req.context

  const expCtr = controllers.exp.instance()
  data.languages = await expCtr.get({cat: 'languages'})
  data.frameworks = await expCtr.get({cat: 'frameworks'})
  data.interSkills = await expCtr.get({cat: 'interSkills'})
  data.skills = await expCtr.get({cat: 'skills'})

  res.render('home', data)
})

router.get('/projects', (req, res, next) => {
  const data = req.context

  res.render('projects', data)
})

router.get('/exp', async (req, res, next) => {
  const filters = req.query
  const expCtr = controllers.exp.instance()
  const exp = await expCtr.get(filters)

  res.json({
    exp
  })
})

module.exports = router
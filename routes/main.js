const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
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

router.get('/projects', async (req, res, next) => {
  const data = req.context

  const projectCtr = controllers.project.instance()
  data.github = await projectCtr.get({type: 'github'})

  res.render('projects', data)
})

router.get('/project', async (req, res, next) => {
  const filters = req.query
  const projectCtr = controllers.project.instance()
  const project = await projectCtr.get(filters)

  res.render({
    project
  })
})


router.get('/exp', async (req, res, next) => {
  const filters = req.query
  const expCtr = controllers.exp.instance()
  const exp = await expCtr.get(filters)

  res.json({
    exp
  })
})

router.post('/message', async (req, res, next) => {
  const messageData = req.body
  
  const messageCtr = controllers.message.instance()
  const message = await messageCtr.post(messageData)
  res.json(message)
})

router.use(express.static(path.join(__dirname, "public")));

router.get('/download', (req, res) => {
  const file = path.join("public/download/SanadAbuJbara.pdf");
  console.log(file)
  res.download(file); 
});

module.exports = router
const express = require('express')
const routes = express.Router()
const urlencoded = express.urlencoded({ extended: true })
const path = require('path')
const personController = require('./controller/PersonController')

routes.use(urlencoded)
routes.use(express.static(path.join('public')))

routes.get('/', personController.personIndex)
routes.get('/add-new-person', personController.personRenderAdd)
routes.get('/update-person/:id', personController.personFind)
routes.get('/delete-person/:id', personController.personDelete)
routes.post('/save-new-person', personController.personSave)
routes.post('/update-a-person', personController.personUpdate)





module.exports = routes
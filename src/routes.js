const express = require('express')
const routes = express.Router()
const urlencoded = express.urlencoded({ extended: true })
const personController = require('./controller/PersonController')
const path = require('path')

routes.use(urlencoded)
routes.use(express.static(path.join('public')))

routes.get('/', personController.personIndex)
routes.get('/add-new-person', (req, res) => {
    res.render('add-new-person')
})
routes.post('/save-new-person', personController.personSave)


routes.get('/delete-person/:id', personController.personDelete)
routes.get('/update-person/:id', personController.personUpdate)








module.exports = routes
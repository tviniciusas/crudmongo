const express = require('express')
const routes = express.Router()
const urlencoded = express.urlencoded({ extended: true })
const personController = require('./controller/PersonController')
const path = require('path')

routes.use(urlencoded)
routes.use(express.static(path.join('public')))


routes.get('/', personController.personIndex )









module.exports = routes
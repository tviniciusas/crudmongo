const express = require('express')
const routes = express.Router()
const urlencoded = express.urlencoded({ extended: true })



routes.use(urlencoded)

routes.get('/', (req, res) => {
    res.render('home')
})










module.exports = routes
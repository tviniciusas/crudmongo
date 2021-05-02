const express = require('express')
const app = express()
const PORT = 3000
const exphbs  = require('express-handlebars')
const routes = require('./src/routes')
require('./src/database/mongo')
const urlencoded = express.urlencoded({ extended: true })


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(routes)
app.use(urlencoded)




app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
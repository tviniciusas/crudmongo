const express = require('express')
const app = express()
const PORT = 3000
const exphbs  = require('express-handlebars')
const routes = require('./src/routes')
require('./src/database/mongo')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(routes)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
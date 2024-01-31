const express = require('express')

const app = express()
const port = 3000

// EJS
app.set('view engine', 'ejs')
app.set('views', 'views')

// RUTAS
app.use('/', require('./routes/index.routes.js'))

app.listen(port, () => console.log(`Servidor ok http://localhost:${port}`))
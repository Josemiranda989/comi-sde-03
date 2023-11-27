const express = require('express')
const path = require('path')

const mainRoutes = require('./routes/main.routes.js')
const productsRoutes = require('./routes/products.routes.js')
const usersRoutes = require('./routes/users.routes.js')

const app = express()
const port = process.env.PORT || 3000

// Config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', mainRoutes)
app.use('/products', productsRoutes)
app.use('/users', usersRoutes)

app.get('*', (req, res)=>{
  res.send(`
  <div style="display:flex; flex-direction:column; align-items:center">
  <h1>Esta pagina no existe</h1>
  <img style="width:50%" src="/img/not-found.webp" alt="error-404">
  </div>  
  `)
})

// listen
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port} 😎🙌`)
})
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'detail.html'))
})

// Error message
app.get('*', (req, res) => {
  res.send(`
            <div style="display:flex; flex-direction:column; align-items:center">
                <h1>Esta pagina no existe loco</h1>
                <img style="width:30%" src="/img/not-found.webp" alt="error-404">
                <a href="/">Volver a home</a>
            </div>
  `)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
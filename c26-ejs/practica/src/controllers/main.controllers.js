const productos = [
  {
    id: 1,
    nombre : "Milanesa",
    precio: 300
  },
  {
    id: 2,
    nombre : "Asado",
    precio: 400
  },
  {
    id: 3,
    nombre : "Helado",
    precio: 200
  },
  {
    id: 4,
    nombre : "Pizza 🍕",
    precio: 300
  }
]

const controllers = {
    home: (req, res) => {
        let admin = true;
        
        res.render('home.ejs', {productos, admin})
      },
    contact:  (req, res) => {
        res.send('Estas en la vista contacto')
      },
    infoParams: (req, res) => {
      const params = req.params.id
      res.send('Estas consultando la info de ' + params)
    }
}
module.exports = controllers
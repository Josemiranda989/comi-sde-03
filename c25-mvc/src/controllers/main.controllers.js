const path = require('path')

const controllers = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../' ,'views', 'home.html'))
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
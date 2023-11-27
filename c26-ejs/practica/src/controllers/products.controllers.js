const productos = [
    {
        id: 1,
        nombre: "Milanesa",
        precio: 300
    },
    {
        id: 2,
        nombre: "Asado",
        precio: 400
    },
    {
        id: 3,
        nombre: "Helado",
        precio: 200
    },
    {
        id: 4,
        nombre: "Pizza 🍕",
        precio: 300
    }

]

const controllers = {
    detail: (req, res) => {
        console.log(req.params); //probamos por consola lo que viene por parametro
        let productoEncontrado = productos.find(producto => {
            return producto.id == req.params.id
        })
        if(productoEncontrado){
            res.render('detail.ejs', {producto: productoEncontrado})
        }
        res.send('El producto que buscas no existe')
    },
    create: (req, res) => {
        res.render('create.ejs')
    },
    search: (req, res) => {
        console.log(req.query); //probamos por consola lo llega por el metodo get en un formulario
        let productosEncontrados = productos.filter(producto => {
            return producto.nombre == req.query.nombre
        })
        res.render('home.ejs', { productos: productosEncontrados, admin: true})
    }

}
module.exports = controllers;
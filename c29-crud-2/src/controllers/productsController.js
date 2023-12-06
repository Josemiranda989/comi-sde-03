const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products.ejs', { products: products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id //guardamos el id que viene por params
		let product = products.find(product => product.id == id) //buscamos el producto
		if (product) { //preguntamos si existe
			return res.render('detail.ejs', { product })
		}
		return res.send('El producto que buscas no existe') //sino devuelvo un mensaje
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form.ejs')
	},

	// Create -  Method to store
	store: (req, res) => {
		const newProduct = {
			// id: Date.now(),
			id: uuidv4(),
			...req.body,
			image: 'default-image.png'
		}
		products.push(newProduct)

		let productsJSON = JSON.stringify(products, null, ' ')
		fs.writeFileSync(productsFilePath, productsJSON)

		res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('product-edit-form.ejs', { product })
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id
		const product = products.find(product => product.id == id)
		if (product) {
			product.name = req.body.name || product.name
			product.price = req.body.price || product.price
			product.description = req.body.description|| product.description
			product.category = req.body.category || product.category
			product.image = req.body.image || product.image
			product.discount = req.body.discount || product.discount

			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
			res.redirect('/products')
		}
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	}
};

module.exports = controller;


/* update: (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id == id);

    if (productIndex !== -1) {
        // Crear un nuevo objeto product utilizando el spread operator
        const updatedProduct = {
            ...products[productIndex],
            ...req.body
        };

        // Actualizar el objeto en el array
        products[productIndex] = updatedProduct;

        // Guardar en el archivo o realizar otras acciones necesarias
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        // Redireccionar o enviar respuesta según sea necesario
        res.redirect('/products');
    }
} */

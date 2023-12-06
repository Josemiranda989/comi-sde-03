const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
			image: req.file?.filename || 'default-image.png'
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
		if(product){
			return res.render('product-edit-form.ejs', { product })
		} 
		return res.send('El producto a editar no existe')
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id
		const product = products.find(product => product.id == id)
		if (product) {
			product.name = req.body.name || product.name
			product.price = req.body.price || product.price
			product.description = req.body.description || product.description
			product.category = req.body.category || product.category
			product.image = req.file?.filename || product.image
			product.discount = req.body.discount || product.discount

			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
			res.redirect('/products')
		}
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// obtenemos id por params
		const id = req.params.id
		// buscamos el producto a eliminar para obtener el nombre de la imagen
		const pDelete = products.find(product => product.id == id)
		// Si la imagen no coincide con la imagen por default que la elimine
		if (pDelete.image != 'default-image.png') {
			fs.unlinkSync(path.join(__dirname, '../../public/images/products', pDelete.image))
		}
		// eliminamos de listado el product a eliminar
		products = products.filter(product => product.id != id)
		// reescribimos el json con los productos
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
		res.redirect('/products')
	}
};

module.exports = controller;
const { validationResult } = require('express-validator');
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
		let { id } = req.params //guardamos el id que viene por params
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
		const results = validationResult(req)
		// console.log('1- Errors', results);
		// console.log('😼😼😼😼😼😼😼😼😼');
		// console.log('2- Errors.mapped()', results.mapped());
		if (results.isEmpty()) {
			// Obtenemos los campos del body con destructuring
			const { name, price, discount, category, description } = req.body
			// Creamos un nuevo producto con todos los campos 
			const newProduct = {
				// id: Date.now(),
				id: uuidv4(),
				name: name,
				//name: req.body.name,
				price: price,
				discount: discount,
				category: category,
				description: description,
				image: req.file?.filename || 'default-image.png'
			}
			// Agregamos ese producto nuevo al listado
			products.push(newProduct)
			//  Convertimos en json el listado
			let productsJSON = JSON.stringify(products, null, ' ')
			// Sobreescribimos json con el nuevo listado
			fs.writeFileSync(productsFilePath, productsJSON)
			// redireccionamos
			res.redirect('/products')
		} else {
			res.render('product-create-form', {errors: results.mapped(), oldData: req.body})
		}
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		if (product) {
			return res.render('product-edit-form.ejs', { product })
		}
		return res.send('El producto a editar no existe')
	},
	// Update - Method to update
	update: (req, res) => {
		// obtenemos el id por params para buscar un producto a editar
		const { id } = req.params
		// obtenemos los datos del formulario por body
		const { name, price, discount, category, description } = req.body
		// buscamos el producto a actualizar en base a el id del producto y el id que viene por params
		const product = products.find(product => product.id == id)
		// Si lo encuentra
		if (product) {
			product.name = name || product.name
			product.price = price || product.price
			product.description = description || product.description
			product.category = category || product.category
			product.discount = discount || product.discount
			product.image = req.file?.filename || product.image
			// convertimos a json y luego sobreescribimos el json database
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
			// redirigimos al listo de productos
			res.redirect('/products')
		} else {
			res.send('El producto no se actualizar')
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
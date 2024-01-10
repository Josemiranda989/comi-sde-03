const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let inSale = products.filter(product => product.category == 'in-sale')
		let visited = products.filter(product => product.category == 'visited')
		res.render('index.ejs', { inSale: inSale, visited: visited, toThousand: toThousand })
	},
	search: (req, res) => {
		let { keywords } = req.query
		let results = products.filter(product => {
			return product.name.toLowerCase().includes(keywords.toLowerCase())
		})
		res.render('results.ejs', { results, keywords })
		// Do the magic
	},
};

module.exports = controller;

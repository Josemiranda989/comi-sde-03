// const db = require('../database/models')

const controller = {
	index: async (req, res) => {
		// const users = await db.User.findAll({
		// 	include: ['country']
		// })
		// const countries = await db.Country.findAll({
		// 	include: ['users']
		// })
		// res.json({
		// 	usuarios: users,
		// 	paises: countries
		// })

		return res.render('index');
	}
}

module.exports = controller;
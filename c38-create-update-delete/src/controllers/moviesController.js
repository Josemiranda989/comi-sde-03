const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', { movies })
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', { movie });
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    create: function (req, res) {
        res.render('moviesAdd')
    },
    processCreate: function (req, res) {
        const { title, rating, awards, release_date, length } = req.body
        Movies.create({
            title,
            rating,
            awards,
            release_date,
            length
        })
            .then(() => {
                res.redirect('/movies')
            })
            .catch(error => console.log(error.message))
    },
    update: async function (req, res) {
        try {
            let id = req.params.id
            let Movie = await Movies.findByPk(id)
            res.render('moviesEdit.ejs', { Movie })
        } catch (error) {
            console.log(error.message);
        }
    },
    processUpdate: async function (req, res) {
        try {
            const { title, rating, awards, release_date, length } = req.body
            await Movies.update({
                title,
                rating,
                awards,
                release_date,
                length
            }, {
                where: { id: req.params.id }
            })
            res.redirect('/movies')
        } catch (error) {
            console.log(error.message);
        }
    },
    delete: async function (req, res) {
        try {
            let id = req.params.id
            let Movie = await Movies.findByPk(id)
            res.render('moviesDelete.ejs', { Movie })
        } catch (error) {
            console.log(error.message);
        }
    },
    processDelete: async function (req, res) {
        try {
            await Movies.destroy({
                where: { id: req.params.id }
            })
            res.redirect('/movies')
        } catch (error) {
            console.log(error.message);
        }
    },
    trash: async (req, res) => {
        try {
            let movies = await Movies.findAll({
                where: {
                    deleted_at: {
                        [Op.not]: null
                    },
                }, paranoid: false
            })
            res.render('trash.ejs', { movies })
        } catch (error) {
            console.log(error.message);
        }
    },
    processRestore: async (req, res) => {
        try {
            await Movies.restore({
                where: { id: req.params.id }
            })
            res.redirect('/movies')
        } catch (error) {
            console.log(error.message);
        }
    }

}

module.exports = moviesController;

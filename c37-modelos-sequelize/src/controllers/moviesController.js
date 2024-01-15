const db = require('../database/models')
const Op = db.Sequelize.Op
module.exports = {
    /*     list: (req, res) => {
            db.Movie.findAll()
                .then((movies) => {
                    console.log(movies);
                    res.render('moviesList', { movies })
                })
                .catch(error => console.log(error.message))
        }, */
    list: async (req, res) => {
        try {
            const movies = await db.Movie.findAll()
            console.log(movies);
            res.render('moviesList', { movies })
        } catch (error) {
            console.log(error.message)
        }
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                if (movie) {
                    res.render('moviesDetail', { movie })
                } else {
                    res.send('No existe')
                }
            })
            .catch(error => console.log(error.message))
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
            .then(movies => {
                res.render('newestMovies', { movies })
            })
            .catch(error => console.log(error.message))
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            order: [ // ORDEN POR FECHA
                ['rating', 'DESC'],
                ['release_date', 'DESC']
            ],
            // TRAER  MEJORES RATING
            limit: 5
        })
            .then(movies => {
                res.render('recommendedMovies', { movies })
            })
            .catch(error => console.log(error.message))
    },
    toyStoryExist: async (req, res) => {
        try {
            const movies = await db.Movie.findAll({
                where: {
                    title: { [Op.like]: '%Toy Story%' }
                }
            })
            res.json(movies)
        } catch (error) {
            console.log(error.message)
        }
    }
}
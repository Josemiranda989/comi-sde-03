const db = require('../../database/models')
const Op = db.Sequelize.Op

const Movies = db.Movie

module.exports = {
    list: async (req, res) => {
        try {
            const movies = await Movies.findAll()
            // console.log(movies);
            const result = {
                meta: {
                    status: 200,
                    count: movies.length,
                    url: '/api/movies',
                    method: 'GET'
                },
                data: movies
            }
            res.json(result)
        } catch (error) {
            console.log(error.message)
        }
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                if (movie) {
                    const result = {
                        meta: {
                            status: 200,
                            url: '/api/movies/detail/' + req.params.id,
                            method: 'GET'
                        },
                        data: movie
                    }
                    res.json(result)
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
                res.json(movies)
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
                res.json(movies)
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
    },
    createMovie: (req, res) => {
        console.log(req.body);
        res.json(req.body)
    }
}
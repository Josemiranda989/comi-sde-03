const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('genresList.ejs', { genres })
            })
            .catch(e => console.log(e.message))
    },
    /* list: async (req, res) => {
        try {
          const genres = await db.Genre.findAll();
          res.render("genresList", { genres });
        } catch (error) {
          res.send(error);
        }
      }, */
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', { genre });
            })
            .catch(e => console.log(e.message))
    },
    /* detail: async (req, res) => {
        try {
          const genre = await db.Genre.findByPk(req.params.id);
          res.render("genresDetail", { genre });
        } catch (error) {
          res.send(error);
        }
      }, */
}

module.exports = genresController;
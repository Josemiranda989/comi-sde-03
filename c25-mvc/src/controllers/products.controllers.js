const path = require('path')
const controllers = {
    detail:  (req, res) => {
        res.sendFile(path.join(__dirname, '../' ,'views', 'detail.html'))
    },
    create: (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'create.html'))
    }

}
module.exports = controllers;
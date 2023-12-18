const fs = require('fs')
const path = require('path')

const pathUsers = path.join(__dirname, '../data/usersDataBase.json')
let users = JSON.parse(fs.readFileSync(pathUsers, 'utf-8'))

module.exports = (req, res, next) => {
    if(req.cookies.rememberme != undefined && req.session.userLogged == undefined){
        console.log('Hay cookie, no hay session');
        let userFound = users.find(user=> user.email == req.cookies.rememberme)
        delete userFound.password
        req.session.userLogged = userFound
    }
    next()
}
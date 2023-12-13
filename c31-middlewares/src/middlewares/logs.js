const fs = require('fs')
const path = require('path')

module.exports = function(req, res, next){
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    
    let msg = `El usuario ingreso en: ${req.url} a las ${hours}:${minutes}hs \n`

    let pathLogs = path.join(__dirname, '..', 'data', 'logs.txt')

    fs.appendFileSync(pathLogs, msg)

    next()
}
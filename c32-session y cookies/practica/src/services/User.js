const fs = require('fs')
const path = require('path')
module.exports = {
    pathUser : path.join(__dirname, '../data/usersDataBase.json'),
    getUsers : function() {
        return JSON.parse(fs.readFileSync(this.pathUser, 'utf-8'))
    },
    findByField: function(field, textToFind){
        return this.getUsers().find(user => user[field] == textToFind)
    },
    SaveUsers: function(data){
        let users = this.getUsers()
        users.push(data)
        fs.writeFileSync(this.pathUser, JSON.stringify(users, null, ' '))
        console.log("Se guardó correctamente");
    },
    deleteUserById: function(id){
        this.getUsers().filter(user => user.id != id)
        console.log("Se eliminó correctamente");
    }

}
console.log(module.exports.SaveUsers([{nombre: "lucas", email:"lucas@gmail.com", password:1235}]));
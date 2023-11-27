const controllers = {
    profile: (req, res) => {
        res.send('Estas en profile')
    },
    userList: (req, res) => {
        res.send('Estas en el listado de usuarios')
    }
}
module.exports = controllers
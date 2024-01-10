const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')

const pathUsers = path.join(__dirname, '../data/usersDataBase.json')
let users = JSON.parse(fs.readFileSync(pathUsers, 'utf-8'))

module.exports = {
    login: (req, res)=>{
        res.render('users/login.ejs')
    },
    processLogin: (req, res) => {
        // Obtener la info del formulario
        let { email, password, rememberme } = req.body
        // Comparar Password con la DB && Email
        let userFound = users.find(user=> user.email == email)

        console.log('body--', req.body);
        console.log('userFound - ', userFound);
        console.log('Comparacion de password',bcryptjs.compareSync(password, userFound.password));

        if(userFound && bcryptjs.compareSync(password, userFound.password)){
            // Crear la sesión
            delete userFound.password
            // userFound.password = null;
            req.session.userLogged = userFound

            if(rememberme == 'on'){
                res.cookie('rememberme', userFound.email, {maxAge: 60000 * 60})
            }

            // Redireccionar a alguna parte
            return res.redirect('/users/profile')
        }
        return res.send('El usuario y contraseña no coinciden')
    },
    profile: (req, res)=>{
        // console.log(req.session.userLogged);
        res.render('users/profile.ejs', {userLogged: req.session.userLogged})
    },
    register: (req, res)=>{
        res.render('users/register.ejs')
    },
    processRegister: (req, res) =>{
        // Obtener info del formulario
        let {userName, email, password} = req.body
        // Chequear que el mail no este registrado en nuesta DB
        let userFound = users.find(user => user.email == email)
        // Si encuentra el email (ya está registrado)
        userFound ? res.send('El mail ya esta registrado, proba con otro') : null
        // Armar el objeto nuevo usuario
        let newUser = {
            id: uuidv4(), //generar un id unico
            userName: userName,
            email: email,
            password: bcryptjs.hashSync(password, 10), //encriptar contraseña
            admin: false
        }
        // Agregarlo a la DB
        users.push(newUser)
        // guardarlo en nuestra DB (JSON)
        fs.writeFileSync(pathUsers, JSON.stringify(users, null, '  '))
        // Redirigir a algun lugar
        res.redirect('/')
    },
    logout: (req, res) => {
        // req.session.destroy()
        req.session.userLogged = undefined //borrar session
        res.clearCookie('rememberme') //borrar cookie
        res.redirect('/')
    }
}
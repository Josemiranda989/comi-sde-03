module.exports = (req, res, next) =>{
    if(req.session.userLogged){
        // console.log('Estas logueado, segui adelante');
        next()
    } else {
        // console.log('No estas logueado, volve al login');
       return res.redirect('/users/login')
    }
}
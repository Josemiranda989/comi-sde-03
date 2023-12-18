module.exports = (req, res, next) =>{
    if(req.session?.userLogged.admin){
        // console.log('Estas logueado, segui adelante');
        next()
    } else {
        // console.log('No estas logueado, volve al login');
        res.redirect('/users/login')
    }
}
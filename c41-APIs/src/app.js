const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiMoviesRoutes = require('./routes/API/apiMoviesRoutes');
const app = express();

app.use((req, res, next) => {
    // Permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Especificar el tipo de contenido como JSON
    res.setHeader('Content-Type', 'application/json');

    next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/movies', moviesRoutes);
app.use('/genres', genresRoutes);

app.use('/api/movies', apiMoviesRoutes)

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

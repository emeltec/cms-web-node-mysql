const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//Routes
const frontRoutes = require('./app/front/routes/front-router');
const adminRoutes = require('./app/admin/routes/admin-router');

// SERVIDOR
const app = express();

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//Habiliar los cors
app.use(cors());


app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('layout', 'layouts/layout-front')
app.use(express.static('app/public'));


app.use('/', frontRoutes);
app.use('/admin', adminRoutes);


// Pages NOT FOUND
app.use('/admin',(req, res, next) => {
  res.status(404).render('404-admin', {
    layout: 'layouts/layout-admin',
    pageTitle: 'Sin contenido'
  })
});

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Pagina no encontrada'
  })
});



app.listen(PORT, () => {
  console.log("Running server on port:", PORT)
})
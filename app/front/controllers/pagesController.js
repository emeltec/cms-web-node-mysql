const db = require('../../config/conexion');

exports.index = (req, res) => {
  res.render('front/index', {
    pageTitle: 'Product list',
    result: null
  })
}

exports.form = (req, res) => {
  res.render('front/add-form', {
    pageTitle: 'Add form'
  })
}

exports.create = (req, res, next) => {
  const values = Object.values(req.body);
  console.log(values);

  const sql = "INSERT INTO Frutas (nombre, precio, color) VALUES(?,?,?)";
  db.query(sql, values, (error, result) => {
    if (error) {
      console.log("Ocurrio un error al guardar", error)
      throw new Error(error);
    }
    res.redirect('/');
    next();
  })
}

exports.services = (req, res) => {
  const values = req.body
  const details = {
    pageTitle: 'Servicios',
    mensaje: 'Pagina de servicios'
  }
  res.render('front/servicios', details)
}

exports.products = (req, res) => {
  const sql = "SELECT * FROM admin_users";
  db.query(sql, (error, results) => {
    if (error) {
      throw new Error(error);
    }
    res.render('front/productos', {
      pageTitle: 'Product list',
      results
    })
  })
}
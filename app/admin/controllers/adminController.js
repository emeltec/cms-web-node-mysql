
const db = require('../../config/conexion');

const LAYOUT_ADMIN = 'layouts/layout-admin';


exports.blogs = (req, res) => {
  res.render('admin/blog-list', {
    layout: LAYOUT_ADMIN,
    pageTitle: 'Blogs'
  })
}

exports.blogCreate = (req, res) => {
  res.render('admin/blog-create', {
    layout: LAYOUT_ADMIN,
    pageTitle: 'Nuevo blog'
  })
}

exports.create = (req, res, next) => {
  const values = Object.values(req.body);

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
  const values = req.body
  const details = {
    pageTitle: 'Productos',
    mensaje: 'Pagina de productos'
  }
  res.render('front/productos', details)
}
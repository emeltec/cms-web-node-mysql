
const db = require('../../config/conexion');

const LAYOUT_ADMIN = 'layouts/layout-admin';

exports.index = (req, res) => {
  const sql = "SELECT * FROM admin_users";
  db.query(sql, (error, results) => {
    if(error) {
      throw new Error(error);
    }
    res.render('admin/wiew-index', {
      layout: LAYOUT_ADMIN, 
      pageTitle: 'Dashboard', 
      results
    })
  })
}

exports.viewRegisterUser = (req, res) => {
  res.render('admin/view-register-user', {
    layout: LAYOUT_ADMIN,
    pageTitle: 'Register user'
  })
}

exports.registerUserDB = (req, res, next) => {

  const {name, email, password} = req.body;
  const values = {name, email, password};
  console.log(values);

  const sql = "INSERT INTO admin_users set ?";
  db.query(sql, [values], (error, result) => {
    if (error) {
      console.log("Ocurrio un error al registrar", error)
      throw new Error(error);
    }
    res.redirect('/admin');
    next();
  })
}



exports.login = (req, res) => {
  res.render('admin/login', {
    layout: LAYOUT_ADMIN,
    pageTitle: 'Login'
  })
}
const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cms_web"
});

conexion.connect(function(err) {
  if (err) {
    throw console.log("Connection failed") + err;
  }
  
  console.log("Connected!");
});


/*
// Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "demodb1"
});

// Connect to DB
pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }
  if (connection) {
    connection.release()
    console.log('Connected as ID ' + connection.threadId);
  }   
  return
})
*/

module.exports = conexion;

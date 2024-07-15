const dotenv = require('dotenv')
const mysql = require('mysql2')
require('dotenv').config()

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  };

  const connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
  });

module.exports = connection;
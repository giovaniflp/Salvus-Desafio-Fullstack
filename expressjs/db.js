const dotenv = require('dotenv')
const mysql = require('mysql2')
require('dotenv').config()

  const dbConfig = {
    host:process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DATABASE,
    port: 3307
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
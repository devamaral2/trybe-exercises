// hello-msc/models/connection.js

const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
 /*  host: 'db',
  user: 'root',
  password: 'password',
  database: 'model_example', */
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME
  });

module.exports = connection;


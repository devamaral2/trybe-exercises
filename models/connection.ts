// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2 e dotenv

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'books_api'});
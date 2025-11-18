// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  password: 'root', //añadimos
  user: 'root',
  database: 'users',
  port: 3306
});

export default connection;
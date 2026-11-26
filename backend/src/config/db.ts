import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 6033,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

pool.getConnection()
  .then((conn) => {
    console.log('Connecté à MySQL Docker sur le port ' + process.env.DB_PORT);
    conn.release();
  })
  .catch((err) => {
    console.error('Erreur de connexion MySQL :', err.message);
  });
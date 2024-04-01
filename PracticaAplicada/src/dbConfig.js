const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BaseDeDatosPracticaAplicada', // Solo el nombre de la base de datos
  password: '123', 
  port: 5432, // El puerto predeterminado de PostgreSQL
});

module.exports = pool;

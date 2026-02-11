const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'bulinga_tss',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test connection
pool.getConnection()
    .then(conn => {
        console.log('✅ MySQL Connected successfully');
        conn.release();
    })
    .catch(err => {
        console.error('❌ MySQL Connection failed:', err.message);
        console.log('⚠️  Please check your database credentials in .env file');
    });

module.exports = pool;
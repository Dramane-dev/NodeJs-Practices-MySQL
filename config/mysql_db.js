const mysql = require('mysql');

// Connection to MySQL 
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'Tasks_Today'
});

module.exports = con;
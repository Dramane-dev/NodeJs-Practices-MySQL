require('dotenv').config();
const { Sequelize } = require('sequelize');

// Instance Sequelize 
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
});
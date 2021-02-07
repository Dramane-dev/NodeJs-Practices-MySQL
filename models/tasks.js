const { Sequelize } = require('sequelize');
const db = require('../config/db');

const Task = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        notNull: true
    },
    nom: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    }
  });

module.exports = Task;

TasksController = require('../controllers/TasksController');

module.exports = (app) => {
  // Home Page
  app.get('/', (req, res) => {
    res.send('Welcome to my To Do App 📜');
  });

  // All of my Tasks
  app.get('/tasks', TasksController.findAll);
}

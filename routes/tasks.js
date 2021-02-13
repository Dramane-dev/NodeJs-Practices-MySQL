TasksController = require('../controllers/TasksController');

module.exports = (app) => {
  // Home Page
  app.get('/', (req, res) => {
    res.send('Welcome to my To Do App 📜');
  });

  // All of my Tasks
  app.get('/tasks', TasksController.findAll);

  // Get Task by id 
  app.get('/task/:id', TasksController.findById);

  // Create Task
  app.post('/task', TasksController.createTask);

  // Updte my task 
  app.put('/task/:id', TasksController.updateTask);

  // Delete task 
  app.delete('/task/:id', TasksController.deleteTask);
}

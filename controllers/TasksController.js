const Task = require('../models/tasks');
const { success, error } = require('../functions/response');

module.exports = {
    
    // Find All of my tasks
    findAll(req, res) {
        Task.findAll()
            .then(task => res.send(success(task)))
            .catch(error => console.log(error.message))
    }
}
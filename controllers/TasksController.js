const Task = require('../models/tasks');
const { success, error } = require('../functions/response');

module.exports = {
    
    // Find All of my tasks
    findAll(req, res) {
        Task.findAll()
            .then(task => res.send(success(task)))
            .catch(err => console.log(error(err.message)))
    },
    findById(req, res) {
        const id = req.params.id;
        Task.findByPk(id)
            .then(task => res.send(success(task)))
            .catch(err => {
                if (err) {
                    return res.status(404).send(error({
                        message: `Task with id ${id} not found ❌`
                    }));
                }
            });
    }
}
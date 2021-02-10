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
    },
    createTask(req, res) {
        const body = req.body;
        if (body.nom === '' || body.date === '') {
            res.status(400).send(error({
                message: `This value cannot be empty`
            }));
        }

        const task = new Task({
            nom: body.nom,
            date: body.date
        });

        // Save Task in db 
        task.save()
            .then(task => res.send(success(task)) && console.log(`Task ${task.nom} created successfuly ✅`))
            .catch(err => res.status(500).send(error({
                message: `The task ${task.nom} cannot be created ❌ !`
            })));
    }
}
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
            .catch(err => {
                if (err) {
                    res.status(500).send(error({
                        message: `The task ${task.nom} cannot be created ❌ !`
                    }));
                }
            });
    },
    updateTask(req, res) {
        // Get id and body 
        const id = req.params.id;
        const body = req.body;

        Task.update(body, {
            where: {
                id: id
            }
        })
        .then(task => {
            // task bigger than 1 if value is different to value in database 
            if (task < 1) {
                return res.send(error({
                    message: `Cannot upadated task ❌ Verify this id. The value cannot be empty or same !`
                }));
            }
            res.send({
                message: 'Task upadated successfuly ✅ ! '
            });
        })
        .catch(err => {
            if (err) {
                return res.status(404).send(error({
                    message: `The task with id ${id} not found ❌ ...`
                }));
            }
        })
    },
    async deleteTask(req, res) {
        const id = req.params.id;

        Task.destroy({
            where: {
                id: id
            }
        })
        .then(task => {
            if (task < 1) {
                return res.send(error({
                    message: `Cannot deleted task ❌ ! Verify this id. Maybe this task does not exist ? `
                })); 
            }
            res.send({
                message: 'Task Deleted successfuly ✅ ! '
            });
        }).catch(err => {
            if (err) {
                return res.send(error({
                    message: err
                }));
            }
        })
    }
}
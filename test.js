/* ---  With MySQL  --- */

//MySQL db
const con = require('./config/mysql_db');


// Get All Tasks
app.get('/my-tasks', (req, res) => {
    // Query for select all data in table 
    con.query('SELECT * FROM Tasks', (err, results, fields) => {
        if (err) throw err; 
        results.map(element => {
            console.log(element.id);
            console.log(element.nom);
            console.log(element.date);
        })
        res.send(results);
    });
});

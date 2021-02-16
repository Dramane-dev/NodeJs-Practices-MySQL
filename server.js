require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const  app = express();
const cors = require('cors')
const { json } = require('body-parser');

// Cors 
app.use(cors());

// sequelize 
const db = require('./config/db');

// Use bodyparser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes 
require('./routes/tasks')(app);

app.listen(process.env.PORT || 3000, () =>{
    console.log(`Server started on ${process.env.PORT} ✅`);
    db.authenticate()
        .then(() => console.log('connected to mysql db successfuly ! ✅'))
        .catch(err => console.log('Impossible de se connecter à la base de données : ❌ ' + error ))
});








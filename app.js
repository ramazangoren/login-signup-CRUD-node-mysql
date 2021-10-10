const express = require('express');
const mysql = require('mysql');
const path = require('path');
const hbs = require('hbs');

const PORT =  process.env.PORT ||  4000;

const app = express();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database'
});


const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname,'./views');
app.use(express.static(publicDirectoryPath));

// parse url-encoded bodies (as sent by html forms)
app.use(express.urlencoded({ extended: false }));

// parse json bodies (as sent by API clients)
app.use(express.json());

app.set('view engine', 'hbs')
app.set('views', viewsPath);


db.connect((error)=>{
    if(error) throw error;
    console.log('connected to database');
})



const routers = require('./routes/pages');
app.use('/', routers);

app.use('/', require('./routes/signup'));

app.use('/', require('./routes/signup'));




app.listen(PORT, (req, res) => {
    console.log('listening on port ' + PORT);
});
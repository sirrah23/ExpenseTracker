const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = require('./db.js');

app.get('/monthly', (req, res) => {
    console.log("GET request -- /monthly");
    db.getAllExpense()
        .then(d => res.json(d));
});

app.post('/monthly', (req, res) => {
    console.log("POST request -- /monthly");
    db.insertExpense(req.body.name, req.body.cents)
    .then(d => {
        console.log(`Record inserted: ${req.body.name} -- ${req.body.cents}`);
        res.sendStatus(200);
    })
    .catch(e => {
        console.log(e)
        res.sendStatus(422);
    })
});

//TODO: Convert to daily price list
app.get('/daily', (req, res) => {
    console.log("GET request -- /daily");
    db.getAllExpense()
        .then(d => res.json(d));
});

app.listen(8081, () => {
     console.log("Listening on port 8081!")
});
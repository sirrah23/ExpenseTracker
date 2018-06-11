const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


//TODO: Hard coded expenses...add SQL database-get
app.get('/monthly', (req, res) => {
    console.log("GET request -- /monthly");
    res.json(
        [
            {
                name: "Service A",
                dollars: 5,
                cents: 0.
            },
            {
                name: "Service B",
                dollars: 6,
                cents: 15,
            }
        ]
    )}
);

//TODO: Hard coded expenses...add SQL database-get
app.get('/daily', (req, res) => {
    console.log("GET request -- /daily");
    res.json(
        [
            {
                name: "Service A",
                dollars: 0,
                cents: 500/30 //Cents / days in month
            },
            {
                name: "Service B",
                dollars: 0,
                cents: 615/30, //Cents / days in month
            }
        ]
    )}
);

app.listen(8081, () => {
     console.log("Listening on port 8081!")
});
const express = require("express");
const app = express();



app.get("/api/getUsername", (req, res) =>{

    let mock = require('./mock');

    if(req.body.id === 1){
        mock.username = 2;
        mock.userDefaultTown = 10;
    }

    if(req.body.id === 2){
        mock.username = 3;
    }
        res.send(mock);
    }
);

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;

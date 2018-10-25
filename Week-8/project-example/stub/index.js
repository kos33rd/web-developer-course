const axios = require("axios")
const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();

app.get("/api/v3/search", (req, res) => {
  const page = req.query.page || 0

  try {
    let mock = require(`./search/${page}`);
    res.send(mock);
  } catch (e) {
    const realUrl = `https://meduza.io${req.url}`;
    console.log('Fallback to real URL:', realUrl)
    axios
      .get(realUrl)
      .then((data) => {
        console.log('Trying to save ', path.resolve(`./stub/search/${page}.json`))
        fs.writeFileSync(path.resolve(`./stub/search/${page}.json`), JSON.stringify(data.data));
        res.send(data.data);
      })
  }

});

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;

const express = require("express");
const app = express();


app.get("/api/v3/search", (req, res) => {
  const page = req.query.page || 0

  console.log(req);
  try {
    let mock = require(`./search/${page}`);
  } catch (e) {

    // Надо бы загрузить настоящие данные и сохранить их в стабовом кэше

  }


  res.send(mock);

});

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;

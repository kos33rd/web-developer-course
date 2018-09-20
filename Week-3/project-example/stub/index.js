const express = require("express");
const app = express();
app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: 12345673453543453, userDefaultTown: 898 })
);
app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;

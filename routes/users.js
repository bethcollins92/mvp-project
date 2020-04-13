var express = require("express");
var router = express.Router();
var db = require("../model/helper");

router.get("/", (req, res) => {
  db("SELECT * FROM users")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req, res) => {
  const [email, password] = req.body;
  db(`INSERT INTO users (email, password) VALUES ('${email}', '${password}')`);
});

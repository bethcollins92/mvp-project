var express = require("express");
var router = express.Router();
var db = require("../model/helper");
var jwt = require("jsonwebtoken");

const secret = process.env.SUPER_SECRET;

router.get("/", (req, res) => {
  db("SELECT * FROM users")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/signup", (req, res) => {
  db(
    `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${req.body.password}');`
  )
    .then((results) => {
      db("SELECT * FROM users")
        .then((results) => {
          res.send(results.data);
        })
        .catch((err) => res.status(500).send(err));
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req, res) => {
  const attemptEmail = req.body.email;
  const attemptPass = req.body.password;

  db(
    `SELECT id FROM users WHERE email = '${attemptEmail}' AND password = '${attemptPass}'`
  ).then((results) => {
    if (results.data.length) {
      const token = jwt.sign(
        {
          user_id: results.data[0].id,
        },
        secret
      );
      res.send({ msg: "You're good to go, here's your token", token });
    } else res.status(400).send({ msg: "Login not successful" });
  });
});

module.exports = router;

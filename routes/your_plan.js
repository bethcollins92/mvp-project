var express = require("express");
var router = express.Router();
var db = require("../model/helper");

router.get("/", (req, res) => {
  db("SELECT * FROM your_plan;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", (req, res) => {
  db(
    `INSERT INTO your_plan (title, img, time) VALUES ("${req.body.title}, ${req.body.img}, ${req.body.time}");`
  )
    .then(results => {
      db("SELECT * FROM items ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});

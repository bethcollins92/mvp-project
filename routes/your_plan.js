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
router.get("/:id", (req, res) => {
  db(`SELECT * FROM your_plan WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", (req, res) => {
  db(
    `INSERT INTO your_plan (title, img, time) VALUES ("${req.body.title}, ${req.body.time}, ${req.body.description}, ${req.body.tips}, ${req.body.img}");`
  )
    .then(results => {
      db("SELECT * FROM heart_exercises ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", (req, res) => {
  db(`DELETE FROM heart_exercises WHERE id = ${req.params.id}`)
    .then(results => {
      db("SELECT * FROM heart_exercises ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

var express = require("express");
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/heart_exercises", (req, res) => {
  db("SELECT * FROM heart_exercises ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/heart_exercises/:id", (req, res) => {
  db(`SELECT * FROM heart_exercises WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/heart_exercises", (req, res) => {
  db(
    `INSERT INTO heart_exercises (title, time, description, tips, img) VALUES ("${req.body.title}, ${req.body.time}, ${req.body.description}, ${req.body.tips}, ${req.body.img}");`
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

router.delete("/heart_exercises/:id", (req, res) => {
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

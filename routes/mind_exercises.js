var express = require("express");
var router = express.Router();
var db = require("../model/helper");

router.get("/", (req, res) => {
  db("SELECT * FROM mind_exercises;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
router.get("/:id", (req, res) => {
  db(`SELECT * FROM mind_exercises WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

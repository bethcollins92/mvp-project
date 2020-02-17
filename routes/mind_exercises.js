var express = require("express");
var router = express.Router();

router.get("/mind_exercises", (req, res) => {
  db("SELECT * FROM mind_exercises ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/mind_exercises/:id", (req, res) => {
  db(`SELECT * FROM mind_exercises WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

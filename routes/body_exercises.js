var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

app.get("/body_exercises", (req, res) => {
  db("SELECT * FROM body_exercises ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/body_exercises/:id", (req, res) => {
  db(`SELECT * FROM body_exercises WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

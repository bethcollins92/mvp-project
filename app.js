var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var heartExercisesRouter = require("./routes/heart_exercises");
var mindExercisesRouter = require("./routes/mind_exercises");
var bodyExercisesRouter = require("./routes/body_exercises");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/mind_exercises", mindExercisesRouter);
app.use("/heart_exercises", heartExercisesRouter);
app.use("/body_exercises", bodyExercisesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

//cron jobs
cron.schedule("* * * * *", function() {
  console.log("running a task every minute");
});

module.exports = app;

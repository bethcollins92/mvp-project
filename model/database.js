require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "exercises",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists heart_exercises; CREATE TABLE heart_exercises(id INT NOT NULL AUTO_INCREMENT,title varchar(455) NOT NULL,time varchar(455) NOT NULL,description varchar(455) NOT NULL,tips varchar(455) NOT NULL,img varchar(455) NOT NULL,PRIMARY KEY (id));`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `heart exercises` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists mind_exercises; CREATE TABLE mind_exercises(	id INT NOT NULL AUTO_INCREMENT,title varchar(455) NOT NULL,time varchar(455) NOT NULL,description varchar(455) NOT NULL,tips varchar(455) NOT NULL,img varchar(455) NOT NULL,PRIMARY KEY (id));`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `mind exercises` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists body_exercises; CREATE TABLE body_exercises(id INT NOT NULL AUTO_INCREMENT,title varchar(455) NOT NULL,time varchar(455) NOT NULL,description varchar(455) NOT NULL,tips varchar(455) NOT NULL,img varchar(455) NOT NULL,PRIMARY KEY (id));`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `body exercises` was successful!");

    console.log("Closing...");
  });

  con.end();
});

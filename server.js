import app from './src/app';

const express = require("express");
const { resolve } = require("path");
const app = express();
const port = process.env.PORT || 5000;

//app.listen(5000);
app.get("/", function (req, res) {
  res.send("hello");
});


app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("IT'S ALIVE");
})
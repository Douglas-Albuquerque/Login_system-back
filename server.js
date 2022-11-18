import app from './src/app';

const express = require("express");
const app = express();

const port = 5000;

//app.listen(5000);
app.use("/", function (req, res) {
  res.send("hello");
});


app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("IT'S ALIVE");
})
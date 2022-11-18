import app from './src/app';

const express = require("express");
const app = express();

const port = 5000;
<<<<<<< HEAD

=======
>>>>>>> 2a83e9f51d96f6ea026e81d337ebc55a817cfe6e

app.use("/", function (req, res) {
  res.send("hello");
});


app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("IT'S ALIVE");
})
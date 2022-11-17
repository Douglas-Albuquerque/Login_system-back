const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

//app.listen(5000);
app.use("/", function (req, res) {
  res.send("IT'S ALIVE");
});


app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("IT'S ALIVE");
})
import app from './src/app';

//app.listen(5000);
app.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("IT'S ALIVE");
})
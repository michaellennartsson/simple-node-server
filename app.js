const express = require('express');

var app = express();

app.use((req, res, next) => {
  var time = new Date().toString();
  console.log(time);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});